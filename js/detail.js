var tabTitle=document.getElementById("tab-title"),
    titDiv=tabTitle.getElementsByTagName("div"),
    tabContent=document.getElementById("tab-content"),
    conDiv=utils.children(tabContent,"div");
function tabChange(n) {
    for (var i = 0; i < titDiv.length; i++) {
        titDiv[i].className = "tag-name";
        conDiv[i].className = "tab-div";
    }
    titDiv[n].className = "tag-name current";
    conDiv[n].className = "tab-div current";
}
for (var i = 0; i < titDiv.length; i++) {
    titDiv[i].onclick = (function (i) {
        return function () {
            tabChange(i);
        }
    })(i);
}
