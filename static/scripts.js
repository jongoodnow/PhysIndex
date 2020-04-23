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
});

angular.module("physindexApp", [])
    .config(function($locationProvider) {
        $locationProvider.html5Mode(true);
    })
    .controller("physindexController", function ($rootScope, $attrs, $http, $location, $q) {
        $rootScope.$on("$locationChangeSuccess", () => {
            if(!_.has($location.search(), "query") || app.searchText !== $location.search().query)
            {
                const queryParams = $location.search();
                if (_.has(queryParams, "query")) {
                    app.searchText = queryParams.query;
                    app.search();
                }
                else if(_.has(queryParams, "equation")){
                    app.showEquation(queryParams.equation);
                }
                else if(_.has(queryParams, "variable")){
                    app.showVariable(queryParams.variable);
                }
                else if(_.has(queryParams, "unit")){
                    app.showUnit(queryParams.unit);
                }
            }
        });

        $rootScope.$watch(function(){
            app.fixedNavbar = $('body').height() + 100 <= $(window).height();
        });

        var app = this;
        app.showGreeting = true;
        app.showAbout = false;
        app.fixedNavbar = $('body').height() + 100 <= $(window).height();

        app.resetPage = () => {
            app.results = null;
            app.showGreeting = true;
            app.showAbout = false;
            $location.url($location.path());
            $('#homepage').animate({'padding-top': '270px'}, 300, function(){
                $('.tt-menu').hide();
            });
        };

        app.showAboutPage = () => {
            $('#homepage').animate({'padding-top': '30px'}, 300, function(){
                $('.tt-menu').hide();
            });

            app.showGreeting = false;
            app.results = null;
            app.showAbout = true;
        };

        app.search = () => {
            if(!app.searchText){
                return;
            }

            $('#homepage').animate({'padding-top': '30px'}, 300, function(){
                $('.tt-menu').hide();
            });
            app.showGreeting = app.showAbout = false;
            $location.url($location.path());
            $location.search("query", app.searchText);

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
                    var resultObj;
                    if(match.type === "equation" && obj.definedVariable !== null){
                        obj = db["variables"][obj.definedVariable];
                        resultObj = {type: "variable", value: obj};
                    }
                    else{
                        resultObj = {type: match.type, value: obj}; 
                    }

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

                    var resultObj;
                    if(match.type === "equation" && obj.definedVariable !== null){
                        obj = db["variables"][obj.definedVariable];
                        resultObj = {type: "variable", value: obj};
                    }
                    else{
                        resultObj = {type: match.type, value: obj}; 
                    }

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
                prioritizedResults = _.uniq(prioritizedResults, r => r.value.id);
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

        app.showEquation = name => {
            $location.url($location.path());
            $location.search("equation", name);
            app.searchText = null;
            $('#homepage').css({'padding-top': '30px'});
            $('.tt-menu').hide();
            app.showGreeting = app.showAbout = false;
            var term = _.find(db["searchTerms"][name], t => t.type === "equation");
            if(term != null){
                var equation = db["equations"][term.id];
                equation["variableValues"] = _.sortBy(_.map(equation["variables"], id => db["variables"][id]),
                    v => equation.definedVariable == v.id ? 0 : 1);
                app.results = [{type: "equation", value: equation}];
            }
            else{
                app.results = [];
            }

            setTimeout(() => {
                MathJax.typeset();
            }, 1);
        };

        app.showVariable = name => {
            $location.url($location.path());
            $location.search("variable", name);
            app.searchText = null;
            $('#homepage').css({'padding-top': '30px'});
            $('.tt-menu').hide();
            app.showGreeting = app.showAbout = false;
            var term = _.find(db["searchTerms"][name], t => t.type === "variable");
            if(term != null){
                var variable = db["variables"][term.id];
                variable["unitCompositionValues"] = _.map(variable["unitComposition"], id => db["units"][id]);
                variable["equationValues"] = _.sortBy(_.map(variable["equations"], id => db["equations"][id]), 
                    eq => eq.definedVariable == variable.id ? 0 : 1);
                app.results = [{type: "variable", value: variable}];
            }
            else{
                app.results = [];
            }

            setTimeout(() => {
                MathJax.typeset();
            }, 1);
        };

        app.showUnit = name => {
            $location.url($location.path());
            $location.search("unit", name);
            app.searchText = null;
            $('#homepage').css({'padding-top': '30px'});
            $('.tt-menu').hide();
            app.showGreeting = app.showAbout = false;
            var term = _.find(db["searchTerms"][name], t => t.type === "unit");
            if(term != null){
                var unit = db["units"][term.id];
                unit["compositionValues"] = _.map(unit["composition"], id => db["units"][id]);
                app.results = [{type: "unit", value: unit}];
            }
            else{
                app.results = [];
            }

            setTimeout(() => {
                MathJax.typeset();
            }, 1);
        };
    });