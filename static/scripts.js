$(document).ready(function(){  
    if($('body').height() <= $(window).height()){
        $('#bottom-nav').addClass('navbar-fixed-bottom');
    }

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

    // var l = {};
    // for(let [k, x] of Object.entries(db["variables"])){
    //     x["definitionRepresentation"] = "$\\left(" + x["representation"].replace(/^[\$]+|[\$]+$/g, "") + "\\right)$";
    //     x["unitComposition"] = db["variableToUnitsMap"][k];
    //     x["equations"] = [];
    //     for(let [ek, ex] of Object.entries(db["equationToVariablesMap"])){
    //         if(ex.includes(k)){
    //             x["equations"].push(ek);
    //         }
    //     }
    //     x["equations"].forEach(eex => {
    //         if(db["equations"][eex]["definedVariable"] === k){
    //             x["definedEquation"] = eex;
    //         }
    //         else{
    //             x["definedEquation"] = null;
    //         }
    //     });
        
    //     l[k] = x;
    // }
    // console.log(JSON.stringify(l));
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

        // $rootScope.$watch(function(){
        //     MathJax.typeset();
        //     return true;
        // });

        var app = this;

        app.search = () => {
            if(!app.searchText){
                return;
            }

            $('#homepage').animate({'padding-top': '30px'}, 300, function(){
                $('.tt-dropdown-menu').hide();
            });

            var escapedSearch = app.searchText.replace(/^[^\w&^\(&^\[&^\{]+|[^\w&^\)&^\]&^\}]+$/g, "");
            var noPunctuation = escapedSearch.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
            var noPunctuationOrSpaces = noPunctuation.replace(/\s{2,}/g, "");
            var noSpacesOrStars = escapedSearch.replace(/\s{2,}/g, "").replace(/\*/g, "");
            var noParens = noSpacesOrStars.replace(/\(|\)/g, "");
            var noUnderscores = noSpacesOrStars.replace(/\_/g, "");
            var noParensOrUnderscores = noParens.replace(/\_/g, "");
            var predicates = _.uniq([escapedSearch, noPunctuation, noPunctuationOrSpaces, noSpacesOrStars, noParens, noUnderscores, noParensOrUnderscores]);

            var equationSearch = escapedSearch.match(/\=|\+|\<|\>/) !== null;
            var prioritizedResults = [];
            if(equationSearch){

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

                var prioritizedLists = [[], [], [], [], [], []];
                allMatches.forEach(match => {
                    var obj = db[match.type + "s"][match.id];

                    if(match.type === "equation" && obj.definedVariable !== null){
                        obj = db["variables"][obj.definedVariable];
                    }
                    var resultObj ={type: match.type, value: obj}; 

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
                    else if(false){

                    }
                    else if(escapedSearch.toLowerCase().includes(obj.fullName.toLowerCase()) || obj.fullName.toLowerCase().includes(escapedSearch.toLowerCase())){
                        prioritizedLists[4].push(resultObj);
                    }
                    else{
                        prioritizedLists[5].push(resultObj);
                    }
                });

                prioritizedResults = prioritizedLists[0];
                for(var i = 1; i < prioritizedLists.length; i++){
                    prioritizedResults = prioritizedResults.concat(prioritizedLists[i]);
                }
            }

            app.results = _.map(prioritizedResults, obj => {
                if(obj.type === "variable"){
                    obj.value["unitCompositionValues"] = _.map(obj.value["unitComposition"], id => db["units"][id]);
                    obj.value["equationValues"] = _.sortBy(_.map(obj.value["equations"], id => db["equations"][id]), 
                        eq => eq.definedVariable == obj.value.id ? 0 : 1);
                }

                return obj;
            });

            setTimeout(() => MathJax.typeset(), 1);
        };
    });