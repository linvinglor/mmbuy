$(function(){
	
	var baseUrl = 'http://localhost:9090';
	var id= getQueryString('id');
	var bigtitle =getQueryString('title');
	$('.hot').text(bigtitle)
	console.log(id)
	//排行榜
	$.ajax({
		
		url:baseUrl+"/api/getbrand",
		data:{
			brandtitleid:id
		},
		success:function(data){
			console.log(data)
			var html =template('brandtitletpl',data);
			$('.brandul').html(html);
		}
	});
	//销量
	$.ajax({
		url:baseUrl+'/api/getbrandproductlist',
		data:{
			brandtitleid:id||1,
			pagesize:4
		},
		success:function(data){
			console.log(data)
			var html =template('hotbrand',data);
			$('#product .content ul').html(html);
		}
	})
	//评论
	$.ajax({
		url:baseUrl+'/api/getproductcom',
		data:{
			productid:1
		},
		success:function(data){
			console.log(data)
			var html = template('commenttpl',data);
			$('#comment ul').html(html);
		}
	})
	mui('.mui-scroll-wrapper').scroll({
		deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
	});
		//点击返回头部
//
//$("#rtt").on("tap", function() {
//	//console.log(111)
//  //$("body").scrollTop(0);
//  window.scrollTo(0,0);
// 
//});

	//别人使用正则写的获取url地址栏参数的方法
function getQueryString(name) {
    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
    var r = window.location.search.substr(1).match(reg);
    if (r != null) {
        // 用了另一种转码方式 我们是默认转码方式 使用decodeURI
        // return unescape(r[2]);
        return decodeURI(r[2]);
    }
    return null;
}
})
