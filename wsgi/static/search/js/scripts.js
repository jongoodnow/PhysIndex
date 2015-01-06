function infoblockIn()
{
    setTimeout(function(){
        var list = document.getElementsByClassName("infoblock");
        for(var i = 0; i < list.length; i++)
        {
            list[i].style.opacity = 1;
        }
    },
    1);
}

function titleUp()
{
    setTimeout(function(){
        var s = document.getElementById("searchform");
        if(s.query.value != "")
        {
            $("#homepage").animate({'padding-top': '0px'}, 300, function(){
                s.submit();
            });
            $(".greeting").fadeOut(300);
        }
    },
    1);
}
 
$(document).ready(function(){
    var countries = new Bloodhound({
        datumTokenizer: Bloodhound.tokenizers.obj.whitespace('name'),
        queryTokenizer: Bloodhound.tokenizers.whitespace,
        limit: 10,
        prefetch: {
            url: '/static/search/data/names.json',
            // the json file contains an array of strings, but the Bloodhound
            // suggestion engine expects JavaScript objects so this converts all of
            // those strings
            filter: function(list) {
                return $.map(list, function(country) { return { name: country }; });
            }
        }
    });
     
    // kicks off the loading/processing of `local` and `prefetch`
    countries.initialize(); 

    $('#query').typeahead({
        hint: true,
        highlight: true,
        minLength: 1
    },{
        name: 'countries',
        displayKey: 'name',
        source: countries.ttAdapter()
    });
});