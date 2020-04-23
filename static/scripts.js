$(document).ready(function(){  
    var names = new Bloodhound({
        datumTokenizer: Bloodhound.tokenizers.obj.whitespace('name'),
        queryTokenizer: Bloodhound.tokenizers.whitespace,
        limit: 10,
        prefetch: {
            url: 'names.json',
            filter: function(list) {
                return $.map(list, function(value) { return { name: value }; });
            }
        }
    });
     
    names.initialize(); 

    $('#query').typeahead({
        hint: true,
        highlight: true,
        minLength: 1
    },{
        name: 'names',
        displayKey: 'name',
        source: names.ttAdapter()
    });

    setTimeout(function(){
        $('article').css('opacity', 1);
    }, 1);
});

angular.module("physindexApp", [])
    .config(function($locationProvider) {
        //$locationProvider.html5Mode(true);
    })
    .controller("physindexController", function ($rootScope, $attrs, $http, $location, $q) {
        $rootScope.$on("$locationChangeSuccess", () => {
            if(app.searchString !== $location.search().query)
            {
                // look it up
            }
        });

        $rootScope.$watch(function(){
            app.fixedNavbar = $('body').height() <= $(window).height();
        });

        var app = this;
        app.showGreeting = true;
        app.fixedNavbar = $('body').height() <= $(window).height();

        app.search = () => {
            if(!app.searchText){
                return;
            }

            $('#homepage').animate({'padding-top': '30px'}, 300, function(){
                $('.tt-dropdown-menu').hide();
            });
            app.showGreeting = false;

            var escapedSearch = app.searchText.replace(/^[^\w&^\(&^\[&^\{]+|[^\w&^\)&^\]&^\}]+$/g, "");
            var noPunctuation = escapedSearch.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
            var noPunctuationOrSpaces = noPunctuation.replace(/\s{2,}/g, "");
            var noSpacesOrStars = escapedSearch.replace(/\s{2,}/g, "").replace(/\*/g, "");
            var noParens = noSpacesOrStars.replace(/\(|\)/g, "");
            var noUnderscores = noSpacesOrStars.replace(/\_/g, "");
            var noParensOrUnderscores = noParens.replace(/\_/g, "");
            var predicates = _.uniq([escapedSearch, noPunctuation, noPunctuationOrSpaces, noSpacesOrStars, noParens, noUnderscores, noParensOrUnderscores]);

            // if the query contains math symbols, we know the query is for an equation, and can make more assumptions about the results.
            var equationSearch = escapedSearch.match(/[=+<>]/g) !== null;
            var prioritizedResults = [];
            if(equationSearch){
                var originalPredicates = predicates;
                var additionalPredicates = [];
                predicates.forEach(p => p.split(/[=+\-*/^<>]+/g).forEach(s => additionalPredicates.push(s)));
                predicates = _.uniq(predicates.concat(additionalPredicates));

                var allMatches = [];
                for(let [term, matches] of Object.entries(db["searchTerms"])){
                    predicates.forEach(predicate => {
                        if(term.toLowerCase().includes(predicate.toLowerCase())){
                            allMatches = _.uniq(allMatches.concat(matches), false, m => m.id);
                        }
                    });
                }

                var prioritizedLists = [[], [], [], []];
                allMatches.forEach(match => {
                    var obj = db[match.type + "s"][match.id];

                    if(match.type === "equation" && obj.definedVariable !== null){
                        obj = db["variables"][obj.definedVariable];
                    }
                    var resultObj = {type: match.type, value: obj};

                    if(_.some(originalPredicates, p => p === obj.quickName)){
                        prioritizedLists[0].push(resultObj);
                    }
                    else if(_.some(originalPredicates, p => p.toLowerCase() === obj.quickName.toLowerCase())){
                        prioritizedLists[1].push(resultObj);
                    }
                    else if(_.some(predicates, p => p.toLowerCase() === obj.quickName.toLowerCase())){
                        prioritizedLists[2].push(resultObj);
                    }
                    else{
                        prioritizedLists[3].push(resultObj);
                    }
                });

                prioritizedResults = prioritizedLists[0];
                for(var i = 1; i < prioritizedLists.length; i++){
                    prioritizedResults = prioritizedResults.concat(prioritizedLists[i]);
                }
                prioritizedResults = prioritizedResults.slice(0, 6);
            }
            else{
                var allMatches = [];
                for(let [term, matches] of Object.entries(db["searchTerms"])){
                    predicates.forEach(predicate => {
                        if(term.toLowerCase().includes(predicate.toLowerCase())){
                            allMatches = _.uniq(allMatches.concat(matches), false, m => m.id);
                        }
                    });
                }

                var prioritizedLists = [[], [], [], [], []];
                allMatches.forEach(match => {
                    var obj = db[match.type + "s"][match.id];

                    if(match.type === "equation" && obj.definedVariable !== null){
                        obj = db["variables"][obj.definedVariable];
                    }
                    var resultObj = {type: match.type, value: obj}; 

                    if(obj.quickName === escapedSearch || obj.fullName.toLowerCase() === escapedSearch.toLowerCase()){
                        if(match.type === "variable"){
                            prioritizedLists[0].push(resultObj);
                        }
                        else{
                            prioritizedLists[1].push(resultObj);
                        }
                    }
                    else if(obj.quickName.toLowerCase() === escapedSearch.toLowerCase()){
                        prioritizedLists[2].push(resultObj);
                    }
                    else if(escapedSearch.toLowerCase().includes(obj.fullName.toLowerCase()) || obj.fullName.toLowerCase().includes(escapedSearch.toLowerCase())){
                        prioritizedLists[3].push(resultObj);
                    }
                    else{
                        prioritizedLists[4].push(resultObj);
                    }
                });

                prioritizedResults = prioritizedLists[0];
                for(var i = 1; i < prioritizedLists.length; i++){
                    prioritizedResults = prioritizedResults.concat(prioritizedLists[i]);
                }
                prioritizedResults = prioritizedResults.slice(0, 6);
            }

            app.results = _.map(prioritizedResults, obj => {
                if(obj.type === "variable"){
                    obj.value["unitCompositionValues"] = _.map(obj.value["unitComposition"], id => db["units"][id]);
                    obj.value["equationValues"] = _.sortBy(_.map(obj.value["equations"], id => db["equations"][id]), 
                        eq => eq.definedVariable == obj.value.id ? 0 : 1);
                }
                else if(obj.type === "unit"){
                    obj.value["compositionValues"] = _.map(obj.value["composition"], id => db["units"][id]);
                }
                else if(obj.type === "equation"){
                    obj.value["variableValues"] = _.sortBy(_.map(obj.value["variables"], id => db["variables"][id]),
                        v => obj.value.definedVariable == v.id ? 0 : 1);
                }

                return obj;
            });

            setTimeout(() => {
                MathJax.typeset();
            }, 1);
        };
    });