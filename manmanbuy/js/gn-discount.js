$(function() {

    
    // 初始化区域滚动
    mui('.mui-scroll-wrapper').scroll({
        deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });



    

    // 调用国内商品折扣列表api
    $.ajax({
        url: 'http://localhost:9090/api/getinlanddiscount',
        success: function(data) {
            console.log(data);
            var html = template("productlist",data);
            $('.mui-scroll-wrapper .content ul').html(html);
        }
    })



    // 给li标签添加点击事件
    $('.mui-scroll-wrapper .mui-scroll ul').on('tap','.libtn',function(){
        // 获取当前商品id
        var id = $(this).data('id');
        // 使用location跳转页面,把id作为参数传递过去
        location = 'product-details.html?id='+id;
    });
    
});
