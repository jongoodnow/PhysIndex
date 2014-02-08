function infoblockIn()
{
    var list = document.getElementsByClassName("infoblock");
    for(var i = 0; i < list.length; i++)
    {
        list[i].style.opacity = 1;
    }
}

function titleUp()
{
    var s = document.getElementById("search_form");
    if(s.query.value != "")
    {
        var top_pad = document.getElementById("frontpageTitle");
        var text_obj = document.getElementById("message");
        top_pad.style.padding = "0px";
        text_obj.style.opacity = "0";
        s.submit();
    }
}