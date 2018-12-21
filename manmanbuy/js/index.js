$(function() {
    var mmb = new MMB();
    mmb.getindexmenu();
    mmb.getmoneyctrl();
})

var MMB = function() {

}

MMB.prototype = {
	 baseURL:'http://192.168.12.83:9090',
    // 1. 获取主页菜单功能
    getindexmenu: function() {
    		var that = this;
        // 1. 请求主页菜单的数据
        // 2. 写模板渲染页面
        $.ajax({
            url: that.baseURL+'/api/getindexmenu',
            success: function(data) {
                var html = template('indexMenuTpl', data);
                $('#nav .mui-row').html(html);
            }
        })
    },
    //2. 获取主页的折扣商品数据
    getmoneyctrl: function() {
      	var that = this;
        // 1. 请求主页菜单的数据
        // 2. 写模板渲染页面
        $.ajax({
            url: that.baseURL+'/api/getmoneyctrl',
            success: function(data) {
                var html = template('moneyCtrlTpl', data);
                $('#productList ul').html(html);
            }
        })
    }
}
