var baseUrl="http://localhost:9090";

$(function() {
	$.getUrlParam = function(a) {
		var t = new RegExp("(^|&)" + a + "=([^&]*)(&|$)"),
		e = window.location.search.substr(1).match(t);
		return null != e ? unescape(e[2]) : null
	};
	var e, a, r = $.getUrlParam("categoryid") || 0,
	n = $.getUrlParam("pageid") || 1;
	function c(e, a, t) {
		$.ajax({
			url: baseUrl + "/api/getproductlist",
			data: {
				categoryid: a || 0,
				pageid: t || 1
			},
			success: function(a) {
				var t = template("categoryPro", a);
				$(e).html(t)
			}
		})
	}
	e = ".su_nav",
	a = r,
	$.ajax({
		url: baseUrl + "/api/getcategorybyid",
		data: {
			categoryid: a || 0
		},
		success: function(a) {
			var t = template("categoryTitle", a);
			$(e).html(t)
		}
	}),
	c(".su_container", r, n),
	$(".buttonBefore").on("click",
	function() {
		var e;
		$.ajax({
			url: baseUrl + "/api/getproductlist",
			data: {
				categoryid: r || 0,
				pageid: n || 1
			},
			success: function(a) {
				var t = template("totalCount", {
					result: a
				});
				$(".page").append(t),
				e = $(".pages").attr("totalCount"),
				1 == n ? n = Math.ceil(e / 10) : n--,
				c(".su_container", r, n)
			}
		})
	}),
	$(".buttonafter").on("click",
	function() {
		var e;
		$.ajax({
			url: baseUrl + "/api/getproductlist",
			data: {
				categoryid: r || 0,
				pageid: n || 1
			},
			success: function(a) {
				var t = template("totalCount", {
					result: a
				});
				$(".page").append(t),
				e = $(".pages").attr("totalCount"),
				n == Math.ceil(e / 10) ? n = 1 : n++,
				c(".su_container", r, n)
			}
		})
	})
});