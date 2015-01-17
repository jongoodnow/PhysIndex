function titleUp(){
    setTimeout(function(){
        var s = document.getElementById('searchform');
        if(s.query.value){
            $('#homepage').animate({'padding-top': '30px'}, 300, function(){
                s.submit();
                $('.tt-dropdown-menu').hide();
            });
            $('#loader').fadeIn(300);
        }
    }, 1);
}

$(document).ready(function(){  
    if($('body').height() <= $(window).height()){
        $('#bottom-nav').addClass('navbar-fixed-bottom');
    }

    var names = new Bloodhound({
        datumTokenizer: Bloodhound.tokenizers.obj.whitespace('name'),
        queryTokenizer: Bloodhound.tokenizers.whitespace,
        limit: 10,
        prefetch: {
            url: '/static/search/data/names.json',
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