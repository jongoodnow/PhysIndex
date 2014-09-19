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
        var s = document.getElementById("search_form");
        if(s.query.value != "")
        {
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