$(function(){
    var num=0;
  
     //搜索按钮的点击事件
     $('.search-icon').on('tap',function(){

        $('#form-search').toggleClass('hide')
        // classList.toggle
        
    })
    //返回顶部的点击事件
    $('#backTop a').on('tap',function(){
     
        $('.mui-scroll').css({
            transform:'translate3d(0px, 0px, 0px) translateZ(0px)',
            transitionDuration:'2s',
            // transitionTimingFunction:'ease-in-out'
        });
        // $('#mui-scroll').attr('style','transform: translate3d(0px, 0px, 0px) translateZ(0px)  transition-duration: 5000ms')
        //加类名样式,但是层级没有行内高
        // $('.mui-scroll').addClass('back')
    })
       
      
       
      

    //请求导航栏标题内容
    $.ajax({
        url: "http://localhost:9090/api/getbaicaijiatitle",
        success: function (res) {
            console.log(res);
            var html =template('navListTpl',res);
            $('.navbar').html(html)

        }
    });


   
    // 商品内容
    queryProduct({titleid:0})
    // queryProduct({titleid:1})
    


     //导航条初始化
     mui('.mui-scroll-wrapper').scroll({
        deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    }); 
    //下拉刷新
    mui.init({
        pullRefresh : {
          container:"#refreshContainer",
          down : {
            height:50,
            contentdown : "下拉可以刷新",
            contentover : "释放立即刷新",
            contentrefresh : "正在刷新...",
            callback :function(){
                queryProduct({titleid:0})
                
                mui('#refreshContainer').pullRefresh().endPulldownToRefresh();
                //重置上拉刷新
                mui('#refreshContainer').pullRefresh().refresh(true);
                //重置num
                num=0;
                
            } 
          },
          up : {
            height:50,
            contentrefresh : "正在加载...",
            contentnomore:'没有更多数据了',
            callback :function(){
                num++;
                $.ajax({
                    url: "http://localhost:9090/api/getbaicaijiaproduct",
                    data: {titleid:num},
                    success: function (res) {
                        // console.log(res.result.length);
                        
                      if(res.result.length<0){
                        mui('#refreshContainer').pullRefresh().endPullupToRefresh(true);
                       
                      }else {
                          //结束上拉加载 true表示没有更多数据了
                          mui('#refreshContainer').pullRefresh().endPullupToRefresh(false);
                          var html =template('productListTpl',res);
                          $('.nav1').append(html)
                      }
                    }
                }) 

            }
          }
        }
      });



    //列表的点击事件
    $('.navbar').on('tap','li a',function(){
        //获取titleid
        var titleid=$(this).data('titleid')
        // console.log(titleid);
        queryProduct({titleid:titleid});
        $(this).parent().addClass('active').siblings().removeClass('active')

        
    })
    
   


    //封装一个查询商品的函数
    function queryProduct(titleId){
        $.ajax({
            url: "http://localhost:9090/api/getbaicaijiaproduct",
            data: titleId,
            success: function (res) {
                // console.log(res);
               var html =template('productListTpl',res);
               $('.nav1').html(html)
            }
        });    
    
    }


    
   
})