$(function(){
    var category=new Category();
    // 初始化滚动,获取一级,二级分类数据
    category.MuiGundongInit();
    category.getCategoryFirst();
    category.getCategorySecond();
})

function Category(){

}
Category.prototype = {
    // 设置链接
    baseURL: "http://localhost:9090",

// 初始化滚动
MuiGundongInit: function () {
    mui('#main .mui-scroll-wrapper').scroll({
        deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
},
  // 获取一级分类数据 
  getCategoryFirst: function () {
    var that = this;
    $.ajax({
        url: that.baseURL + "/api/getcategorytitle",
        type: "get",
        success: function (data) {
            console.log(data);
            
            var html = template("firstCategoryTpl", data);
            $("#main .mui-table-view").html(html);
            
        }
    })
},
 // 获取二级分类数据
 getCategorySecond: function (id) {
    var that = this;

    $("#main .mui-table-view").on("tap", ".categoryFirst",function() {
        var that2 = this;
        var id = $(that2).data("id");

        $.ajax({
            url: that.baseURL + "/api/getcategory",
            type: "get",
            data: {
                titleid: id,
            },

            success: function (data) {
                var html = template("secondCategoryTpl", data);
                $(that2).children(".mui-collapse-content").html(html);
            }
        })

    })
    
}


}