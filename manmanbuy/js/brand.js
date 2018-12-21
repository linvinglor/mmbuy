$(function() {
	var baseUrl = 'http://localhost:9090';
	mui('.mui-scroll-wrapper').scroll({
		deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
	});
	$.ajax({
		url: baseUrl + '/api/getbrandtitle',
		success: function(data) {
			console.log(data)
			var html = template('brandtpl', data);
			$('.brandul').html(html);
		}
	});
	var brandtitleid = 0
	$('#content').on('tap', '.brandul li', function() {
		id = $(this).data('id')
		console.log(id)
		location='brandtitle.html?id='+id;
	})
	
	

})