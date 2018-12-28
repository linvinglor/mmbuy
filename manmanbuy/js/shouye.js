$(function () {

    var slider = mui("#slider");
    slider.slider({
        interval: 3000
    });

    // 初始化区域滚动
    mui('.mui-scroll-wrapper').scroll({
        deceleration: 0.0005, //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
        indicators: false, 
    });


    $.ajax({
        url: 'http://localhost:9090/api/getindexmenu',
        success: function (data) {
            console.log(data);
            var html = template('navTpl', data);
            $('#nav ul').html(html);

        }
    })
    $.ajax({
        url: 'http://localhost:9090/api/getmoneyctrl',
        success: function (data) {
            console.log(data);
            var html = template('letterTpl', data);
            $('#letter').html(html);

        }
    })



});