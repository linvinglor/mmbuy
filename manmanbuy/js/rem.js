// 因为这个JS对页面渲染有影响放到前面写
function getHtmlFontsize() {
    // 假设一个设计稿的宽度 750
    var DesignWidth = 750;
    //2倍图
    var DesignFontSize = 200;
    // 获取当前视口的宽度
    var nowWidth = document.documentElement.clientWidth;
    /*750 / 200 == 375 / 100
     设计稿宽度 / 设计稿根元素 == 当前屏幕宽度 / 当前屏幕根元素
     375 / (750 / 200) == 100
     当屏幕宽度  / (设计稿宽度 / 设计稿的根元素)
     320 / (750 / 200)  == 85.3333px */
    /* 4 / 2 == 2 / x
     2 / ( 4 / 2 )  == 1*/
    var nowFontSize = nowWidth / (DesignWidth / DesignFontSize);
    document.documentElement.style.fontSize = nowFontSize + 'px';
}
getHtmlFontsize();
window.addEventListener('resize', getHtmlFontsize);