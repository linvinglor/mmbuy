$(function(){
    //渲染商品列表
    
    $.ajax({
        url:'http://localhost:9090/api/getmoneyctrl',
        success: function(data) {
            console.log(data);
            
            // 3. 调用模板生成html
            var html = template('productListTpl', data);
            // 4. 渲染到商品列表内容的ul
            console.log(html);
            
            $('.product-list').html(html);
        }
    })

    $('.mui-scroll-wrapper ul').on('tap','li',function(){
        var id=$(this).data('id');
        location='save-sale.html?id='+id;
        
    })
})