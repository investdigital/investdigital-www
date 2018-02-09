$(window).load(function(){
    // io_which_way_alter();
    if (document.addEventListener) {//firefox
        document.addEventListener('DOMMouseScroll', scrollFunc, false);
    }
    //滚动滑轮触发scrollFunc方法  //ie 谷歌
    window.onmousewheel = document.onmousewheel = scrollFunc;
});
let scrollFunc = function (e) {
    e = e || window.event;
    scrollTop=document.documentElement.scrollTop;
    if (e.wheelDelta) {  //判断浏览器IE，谷歌滑轮事件
        if (e.wheelDelta > 0) { //当滑轮向上滚动时
            if(scrollTop<=window.innerHeight){
                scrollTop-=9;
                if(scrollTop<=0){
                    scrollTop=0
                }
            }
        }
        if (e.wheelDelta < 0) { //当滑轮向下滚动时
            // console.log(event);
            if(scrollTop<=window.innerHeight){
                scrollTop+=9;
            }
        }
    } else if (e.detail) {  //Firefox滑轮事件
        if (e.detail> 0) { //当滑轮向上滚动时
            // console.log(event);
            if(scrollTop<=window.innerHeight){
                scrollTop-=9;
                if(scrollTop<=0){
                    scrollTop=0
                }
            }
        }
        if (e.detail< 0) { //当滑轮向下滚动时
            // console.log(event);
            if(scrollTop<=window.innerHeight){
                scrollTop+=9;
            }
        }
    }
    document.documentElement.scrollTop=scrollTop;
};
