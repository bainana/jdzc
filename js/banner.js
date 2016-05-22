var slide=document.getElementById("slide-left"),
    oUl=utils.firstChild(slide,"ul"),
    oLis=utils.children(oUl,"li"),
    imgList=slide.getElementsByTagName("img");

function ajax(url,callback){
    var xhr=new XMLHttpRequest;
    xhr.open("get",url,true);
    xhr.onreadystatechange=function(){
        if(xhr.readyState===4&&/^2\d{2}/.test(xhr.status)){
            var data=JSON.parse(xhr.responseText);
            callback&&callback(data);
        }
    };
    xhr.send(null);
}
function bindHTML(data){
    var str='';
    if(data){
        for(var i=0;i<data.length;i++){
            var curData=data[i];
            str+='<li>';
            str+='<a href=""><img src="" trueImg="'+curData.img+'"/></a>';
            str+='</li>';
        }
        str+='<li><a href=""><img src="" trueImg="'+data[0]+'"/></a>';
    }
    oUl.innerHTML=str;
    count=data.length+1;
    utils.css(oUl,"width",count*600);
}
function lazyImg(){
    for(var i=0;i<imgList.length;i++){
        ~function (i) {
            var curImg = imgList[i];
            var oImg = new Image;
            oImg.src = curImg.getAttribute("trueImg");
            oImg.onload = function () {
                curImg.src = this.src;
                curImg.style.display = "block";
                oImg = null;
                zhufengAnimate(curImg, {opacity: 1}, 300);
            }
        }(i);
    }
}

//4、实现自动轮播
function autoMove() {
    if (step >= (count - 1)) {
        step = 0;
        bannerInner.style.left = 0;
    }
    step++;
    zhufengAnimate(bannerInner, {left: -step * 1000}, 500);
    changeTip();
}

//5、实现焦点对齐
function changeTip() {
    var tempStep = step >= oLis.length ? 0 : step;
    for (var i = 0, len = oLis.length; i < len; i++) {
        var curLi = oLis[i];
        i === tempStep ? utils.addClass(curLi, "bg") : utils.removeClass(curLi, "bg");
    }
}

//->6、停止和开启自动轮播
banner.onmouseover = function () {
    window.clearInterval(autoTimer);
    bannerLeft.style.display = bannerRight.style.display = "block";
};
banner.onmouseout = function () {
    autoTimer = window.setInterval(autoMove, interval);
    bannerLeft.style.display = bannerRight.style.display = "none";
};

//->7、单击焦点实现轮播图的切换
~function () {
    for (var i = 0, len = oLis.length; i < len; i++) {
        var curLi = oLis[i];
        curLi.index = i;
        curLi.onclick = function () {
            step = this.index;
            changeTip();
            zhufengAnimate(bannerInner, {left: -step * 1000}, 500);
        }
    }
}();

//8、实现左右切换
bannerRight.onclick = autoMove;
bannerLeft.onclick = function () {
    if (step <= 0) {
        step = count - 1;
        utils.css(bannerInner, "left", -step * 1000);
    }
    step--;
    zhufengAnimate(bannerInner, {left: -step * 1000}, 500);
    changeTip();
}

