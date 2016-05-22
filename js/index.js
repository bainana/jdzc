var jsTopMenu = document.getElementById("jsTopMenu"),
    jsTopMenuLis = utils.children(jsTopMenu, "li"),
    dropDown = document.getElementsByClassName("dropdown"),
//dropBox = document.getElementsByClassName("dropbox"),
    navBox = document.getElementById("navBox"),
    navLis = navBox.getElementsByClassName("nav-item"),
    userCenter=document.getElementById("userCenter"),
    userMenu=document.getElementById("userMenu"),
    userWhite=document.getElementById("userWhite"),
    itemUp=document.getElementById("item-up"),
    itemUpLis=itemUp.getElementsByTagName("li");


~(function () {
    for (var i = 0; i < jsTopMenuLis.length; i++) {
        var curLi = jsTopMenuLis[i];
        var jsTopMenuUls = utils.children(curLi, "ul")[0];
        if (jsTopMenuUls) {
            curLi.onmouseenter = function () {
                var jsTopMenuOul = utils.children(this, "ul")[0];//重新获取一次，不然直接得到的是最后一个。
                jsTopMenuOul.style.display = "block";
                utils.addClass(this, "topmenu-dropdown-hover")
            };
            curLi.onmouseleave = function () {
                var jsTopMenuOul = utils.children(this, "ul")[0];
                jsTopMenuOul.style.display = "none";
                utils.removeClass(this, "topmenu-dropdown-hover");
            }
        }
    }
    for (var j = 0; j < dropDown.length; j++) {
        var curDrop = dropDown[j];
        curDrop.index = j;
        var curDropUl = utils.children(curDrop, "ul")[0];
        if(curDropUl){
            curDrop.onmouseenter = function () {
                var curDropUl = utils.children(this, "ul")[0];//重新获取一次，不然直接得到的是最后一个。
                curDropUl.style.display = "block";
                utils.addClass(this, "toplink-dropdown-hover");
                console.log(curDropUl)
            };
            curDrop.onmouseleave = function () {
                var curDropUl = utils.children(this, "ul")[0];
                curDropUl.style.display = "none";
                utils.removeClass(this, "toplink-dropdown-hover");
            }
        }

    }
    for (var k = 0; k < navLis.length; k++) {
        var curNav = navLis[k];
        //navLis.index = k;
        var curDropUl = utils.children(curNav, "ul")[0];
        if(curDropUl){
            curNav.onmouseenter = function () {
                var curDropUl = utils.children(this, "ul")[0];//重新获取一次，不然直接得到的是最后一个。
                curDropUl.style.display = "block";
                utils.addClass(this, "nav-item-hover");
            };
            curNav.onmouseleave = function () {
                var curDropUl = utils.children(this, "ul")[0];
                curDropUl.style.display = "none";
                utils.removeClass(this, "nav-item-hover");
            }
        }

    }
})()
function userMenus(){
    userCenter.onmouseenter=function(){
        utils.addClass(userCenter,"main-nav-user-hover");
        userMenu.style.display="block";
        userWhite.style.display="block";
    };
    userCenter.onmouseleave=function(){
        utils.removeClass(userCenter,"main-nav-user-hover");
        userMenu.style.display="none";
        userWhite.style.display="none";
    }
}
//最新上架input框
function itemUpInput(){
    for(var i=0;i<itemUpLis.length;i++){
        var curItem=itemUpLis[i];
        curItem.onmouseenter=function(){
            var curInput=utils.lastChild(this,"div");
            var itemInputBg=utils.children(this,"div")[2];

        };
        curItem.onmouseleave=function(){
            var curInput=utils.lastChild(this,"div");
            var itemInputBg=utils.children(this,"div")[2];
        }
    }
}
//热门切换
function hotChange(titId,conId) {
    var tit = document.getElementById(titId);
    var con = document.getElementById(conId);
    var titLis = tit.getElementsByTagName("li");
    var conUls = con.getElementsByTagName("ul");
    for (var i = 0; i < titLis.length; i++) {
        var curLi = titLis[i];
        curLi.index = i;
        if (i == 0) {
            conUls[curLi.index].className="cur";
            curLi.className="cur";
        }
        curLi.onclick = function () {
            for(var j=0;j<titLis.length;j++){
                //conUls[j].className="";
                //titLis[j].className="";
                utils.removeClass(conUls[j],"cur");
                utils.removeClass(titLis[j], "cur");
            }
            utils.addClass(conUls[this.index],"cur");
            utils.addClass(this, "cur");
        };
    }
};
//最新上架切换
function newChange(titId,conId) {
    var tit = document.getElementById(titId);
    var con = document.getElementById(conId);
    var titLis = tit.getElementsByTagName("li");
    var conUls = con.getElementsByTagName("ul");
    for (var i = 0; i < titLis.length; i++) {
        var curLi = titLis[i];
        curLi.index = i;
        var oSpan=utils.firstChild(titLis[i],"span");
        if (i == 0) {
            conUls[curLi.index].className="tab-ul cur";
            oSpan.className="cur";
        }
        curLi.onclick = function () {
            var oSpan=utils.firstChild(this,"span");
            for(var j=0;j<titLis.length;j++){
                var oSpans=utils.firstChild(titLis[j],"span");
                utils.removeClass(oSpans, "cur");
                utils.removeClass(conUls[j],"cur");
            }
            utils.addClass(oSpan, "cur");
            utils.addClass(conUls[this.index],"cur");
        };
    }
};
//楼层的tab切换
function floorChange(titId,conId) {
    var tit = document.getElementById(titId);
    var con = document.getElementById(conId);
    var titLis = tit.getElementsByTagName("li");
    var conUls = con.getElementsByTagName("ul");
    for (var i = 0; i < titLis.length; i++) {
        var curLi = titLis[i];
        curLi.index = i;
        var oSpan=utils.firstChild(titLis[i],"span");
        if (i == 0) {
            conUls[curLi.index].className="tab-ul cur";
            oSpan.className="cur";
        }
        curLi.onclick = function () {
            var oSpan=utils.firstChild(this,"span");
            for(var j=0;j<titLis.length;j++){
                var oSpans=utils.firstChild(titLis[j],"span");
                oSpans.className="";
                conUls[j].className="tab-ul";
                console.log(conUls[j]);
            }
            utils.addClass(oSpan,"cur");
            utils.addClass(conUls[this.index],"cur");
        };
    }
};
//itemUpInput();
userMenus();
hotChange("jsHotRecTit","jsHotRecPic");
newChange("newUpTit","newListCon");
floorChange("1fTit","1fCon");
floorChange("2fTit","2fCon");
floorChange("3fTit","3fCon");
floorChange("4fTit","4fCon");