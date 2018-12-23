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
});