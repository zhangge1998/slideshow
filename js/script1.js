/**
 * Created by ubuntu on 20/10/17.
 */
var img = document.getElementById('img');
var list = document.getElementById('index').getElementsByTagName('li');
var prev = document.getElementById('prev');
var next = document.getElementById('next');
var index = 0;
var timer;

function moveImg(offset) {
    //获取的是style.left，是相对左边获取距离，所以第一张图后style.left都为负值，
    //且style.left获取的是字符串，需要用parseInt()取整转化为数字。
    var newLeft = parseInt(img.style.left) + offset;
    img.style.left = newLeft + 'px';
    if (newLeft > 0) {
        img.style.left = -2400 + 'px';
    }
    if (newLeft < -2400) {
        img.style.left = 0 + 'px';
    }
}

function moveIndex(list, index) {
    for (var i = 0; i < list.length; i++) {
        if (list[i].className == "on") {
            list[i].className = "";
        }
    }
    list[index].className = "on";
}

prev.onclick = function () {
    clearInterval(timer);
    index -= 1;
    if (index < 0) {
        index = 4
    }
    moveIndex(list, index);
    moveImg(600);
    play();
};

next.onclick = function () {
    clearInterval(timer);
    index += 1;
    if (index > 4) {
        index = 0
    }
    moveImg(-600);
    moveIndex(list, index);
    play();
};

for (var i = 0; i < list.length; i++) {
    list[i].index = i;
    list[i].onmouseover = function () {
        var clickIndex = parseInt(this.index);
        var offset = 600 * (index - clickIndex);
        moveImg(offset);
        index = clickIndex;
        moveIndex(list, index);
        clearInterval(timer);
    };
    list[i].onmouseout = function () {
        play();
    };
}

function play() {
    timer = setInterval(function () {
        next.onclick();
    }, 3000)
}
play();

