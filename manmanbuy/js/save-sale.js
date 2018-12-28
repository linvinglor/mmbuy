$(function(){
    //渲染商品列表
    var id = getQueryString('id');
    console.log(id);
    
    $.ajax({
        url:'http://localhost:9090/api/getmoneyctrlproduct',
        data: {
            productid: id},
        success: function(data) {
            console.log(data);
            
            // 3. 调用模板生成html
            var html = template('productListTpl',data);
            // 4. 渲染到商品列表内容的ul
            // console.log(html);
            
            $('#main').html(html);
        }
    })
    // 根据url参数名取值
    function getQueryString(name) {
        var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
        var r = window.location.search.substr(1).match(reg);
        // console.log(r);
        if (r != null) {
            //转码方式改成 decodeURI
            return decodeURI(r[2]);
        }
        return null;
    }

})