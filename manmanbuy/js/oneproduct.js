$(function() {
	var baseUrl = 'http://localhost:9090';
	var shopid = 1;
	var areaid = 1;
	//店铺
	$.ajax({
		url: baseUrl + '/api/getgsshop',
		success: function(data) {
			console.log(data)
			var html = template('jdtpl', data);
			$('.jdTop div').html(html)
		}
	})
	//地区
	$.ajax({
		url: baseUrl + '/api/getgsshoparea',
		success: function(data) {
			console.log(data)
			var html = template('adrsstpl', data);
			$('.adrss div').html(html);
		}
	});

	//渲染主体
	xuanran()
	//下拉刷新
	mui.init({
		pullRefresh: {
			container: "#refreshContainer", //下拉刷新容器标识，querySelector能定位的css选择器均可，比如：id、.class等
			down: {
				contentdown: "拉我,我要刷新了", //可选，在下拉可刷新状态时，下拉刷新控件上显示的标题内容
				contentover: "释放立即刷新", //可选，在释放可刷新状态时，下拉刷新控件上显示的标题内容
				contentrefresh: "爸爸在努力给你加载...", //可选，正在刷新状态时，下拉刷新控件上显示的标题内容
				callback: function() {
					page = 1;
					//使用定时器模拟请求延迟2秒
					setTimeout(function() {
						
						$.ajax({
							url: baseUrl + '/api/getgsproduct',
							data: {
								shopid: shopid,
								areaid: areaid
							},
							success: function(data) {
								// 3.8 拿到数据调用模板生成html
								var html = template('producttpl', data);
								$('#refreshContainer ul').html(html);
								//结束下拉刷新
								mui('#refreshContainer').pullRefresh().endPulldownToRefresh();
								//endPulldownToRefresh()结束上拉加载
								//要等结束了下拉刷新后再重置
								//把上拉加载也要
								// 重置上拉加载
								mui('#refreshContainer').pullRefresh().refresh(true);

							}
						});
					}, 2000)
				} //必选，刷新函数，根据具体业务来编写，比如通过ajax从服务器获取新数据；
			}, //down
			up: {
				contentrefresh: "爸爸在努力给你加载...", //可选，正在加载状态时，上拉加载控件上显示的标题内容
				contentnomore: '我也是有底线的', //可选，请求完毕若没有更多数据时显示的提醒内容；
				callback: function() {
					//使用定时器模拟请求2秒钟
					setTimeout(function() {
	
						$.ajax({
							url: baseUrl + '/api/getgsproduct',
							data: {
								shopid: shopid,
								areaid: areaid
							},
							success: function(data) {
								
								console.log(data);
								if(data.length > 0) {
									// 3.8 拿到数据调用模板生成html
									var html = template('producttpl', data);
									// 3.9 把html添加的后面到页面
									$('#refreshContainer ul').append(html);
									//结束下拉刷新
									mui('#refreshContainer').pullRefresh().endPullupToRefresh();
									//endPulldownToRefresh()结束上拉加载
									//要等结束了下拉刷新后再重置

								} else {
									mui('#refreshContainer').pullRefresh().endPullupToRefresh(true);
									//true表示没有数据了
								}
							}
						});

					}, 2000)
				} //必选，刷新函数，根据具体业务来编写，比如通过ajax从服务器获取新数据；
			}
		}
	});
	
	//	mui('.mui-scroll-wrapper').scroll({
	//		deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
	//	});
	
	//
	$('.jdTop').on('tap','div>p',function(){
		console.log(111)
		var txt=$(this).text()
		$('.toptitle').text(txt)
		var id = $(this).data('id')
		shopid=id
		console.log(id)
		xuanran()
		
		$(this).parent().parent().removeClass('mui-active');
		
	})
	$('.adrss').on('tap','div>p',function(){
		
			console.log(111)
		var txt=$(this).text()
		$('.twotitle').text(txt)
		var id = $(this).data('id')
		areaid=id
		console.log(id)
		xuanran()
		$(this).parent().parent().removeClass('mui-active');
		
	})
	
	
	
	
	function xuanran(){
		$.ajax({
		url: baseUrl + '/api/getgsproduct',
		data: {
			shopid: shopid,
			areaid: areaid
		},
		success: function(data) {
		
			var html = template('producttpl', data);
			$('#refreshContainer ul').html(html);
		}
	})
	}
})