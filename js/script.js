/**
 * Created by ubuntu on 19/10/17.
 */
var imgList=document.getElementById('img').getElementsByTagName('li');
var list=document.getElementById('index').getElementsByTagName('li');
var prev = document.getElementById('prev');
var next = document.getElementById('next');
var index=0;
var timer;
function moveImg(list,index) {
    for(var i=0;i<list.length;i++){
        if(list[i].className=='opa-on'){//清除li的透明度样式
            list[i].className='';
        }
    }
    list[index].className='opa-on';
}

function moveIndex(list,num){
    for(var i=0;i<list.length;i++){
        if(list[i].className=='on'){
            list[i].className='';
        }
    }
    list[num].className='on';
}

function getPrev(list,num){
    list[num].className='';
    if(num-1>=0){
    list[num-1].className='opa-on';}
    else{
        list[imgList.length-1].className='opa-on';
    }

}

function getNext(list,num){
    list[num].className='';
    if(num+1<=imgList.length-1) {
        list[num + 1].className = 'opa-on';
    }
    else{
        list[0].className = 'opa-on';
    }
}

prev.onclick = function() {
    clearInterval(timer);
    getPrev(imgList,index);
    index -= 1;
    if (index < 0) {
        index = 4
    }
    moveIndex(list,index);
    play();
};

next.onclick = function() {
    clearInterval(timer);
    getNext(imgList,index);
    index += 1;
    if (index > 4) {
        index = 0
    }
    moveIndex(list,index);
    play();
};

for(var i=0;i<list.length;i++){
    list[i].index=i;
    list[i].onmouseover= function () {
        var clickIndex=parseInt(this.index);
        index=clickIndex;
        moveImg(imgList,index);
        moveIndex(list,index);
        clearInterval(timer);
    };
    list[i].onmouseout= function () {
        play();
    };

}

var nextMove=function(){
    index+=1;
    if(index>=5){
        index=0
    }
    moveImg(imgList,index);
    moveIndex(list,index);
};
var play=function(){
    timer=setInterval(function(){
        nextMove();
    },3000);
};
play();