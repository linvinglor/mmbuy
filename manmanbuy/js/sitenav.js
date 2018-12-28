$(function () {
    $.ajax({
        url:'http://localhost:9090/api/getsitenav',
        success:function (data) {
            console.log(data);
            // 调用模板生成html
            var html = template('navList',data);
            $('.prodList').html(html);
        }
    });
    //先初始化一下
    //  mui.init();
     mui('.mui-scroll-wrapper').scroll({
        deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });

});