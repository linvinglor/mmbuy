$(function(){
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
    var id = getQueryString('id');
    console.log(id);
    
    // 调用商品列表的api
    $.ajax({
        url: 'http://localhost:9090/api/getdiscountproduct',
        data: {productid: id},
        success: function(data) {
            console.log(data);
            // 调用生成模板
            var html = template('product-details',data);
            // 渲染到页面上
            $('#main .mainde').html(html);
        }
    })
    


})