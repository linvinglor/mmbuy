$(function () {
    var category = new Category();
    // 初始化滚动,获取一级,二级分类数据的函数
    category.MuiGundongInit();
    category.getCategoryFirst();
    category.getCategorySecond();
})


// 获取分页数据的函数
function Category() {

}
//分页函数的原型链
Category.prototype = {
    // 设置链接
    baseURL: "http://localhost:9090",

    // 初始化滚动
    MuiGundongInit: function () {
        mui('#main .mui-scroll-wrapper').scroll({
            deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
        });
    },
    // 获取一级分类数据的函数 
    getCategoryFirst: function () {
        var that = this;
        $.ajax({
            url: that.baseURL + "/api/getcategorytitle",
            type: "get",
            success: function (data) {
                console.log(data);
                // 将请求到的数据赋值给一级分类的模板引擎,转化成变量,再赋值给一级分类的盒子
                var html = template("firstCategoryTpl", data);
                $("#main .mui-table-view").html(html);

            }
        })
    },
    // 获取二级分类数据
    getCategorySecond: function (id) {
        var that = this;
        // 委托给一级分类的按钮添加点击事件,要弹出二级分类,所以作用在一级分类的盒子身上 
        $("#main .mui-table-view").on("tap", ".categoryFirst", function () {
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