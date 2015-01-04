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

function ContainsAny(str, items){
    for(var i in items){
        var item = items[i];
        if (str.indexOf(item) > -1){
            return true;
        }
    }
    return false;
}

function titleUp()
{
    setTimeout(function(){
        var s = document.getElementById("search_form");
        if(s.query.value != "" && !ContainsAny(s.query.value.toLowerCase(), 
            ['select', 'union', 'benchmark', 'md5', 'db_name', 'concat', 'null', 'drop']
        )){
            var top_pad = document.getElementById("frontpageTitle");
            var text_obj = document.getElementById("message");
            var loading = document.getElementById("load");
            top_pad.style.padding = "0px";
            text_obj.style.opacity = "0";
            loading.style.opacity = "1";
            s.submit();
        }
    },
    1);
}

function checkForm(){
    var s = document.getElementById("search_form");
    if(s.query.value != "" && !ContainsAny(s.query.value.toLowerCase(), 
        ['select', 'union', 'benchmark', 'md5', 'db_name', 'concat', 'null', 'drop']
    )){
        s.submit();
    }
}