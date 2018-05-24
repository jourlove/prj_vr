$(function() {

	// 解决Bootstrap Modal 关闭时右侧滚动条消失，页面左移的解决方法
	$('.modal').on('hide.bs.modal', function() {
		$("body").removeClass('modal-open');
		$("body").css('padding-right','0px');
	});

	/*第一次加载页面时判断导航栏是否切换透明度*/
	$('.top-banner img').first().load(function() {
		navColorToogle('top-banner');
	});

	/* 图片懒加载 */
	// lazyload();

	/* 页面滚动时触发的事件 */
	$(window).scroll(function() {

		/* 导航栏切换透明度 */
		navColorToogle('top-banner');

		/* 返回顶部按钮 显示/隐藏 */
		var osTop = document.documentElement.scrollTop || document.body.scrollTop;
		var clientHeight = document.documentElement.clientHeight;
		if(osTop >= clientHeight) {
			$("#back-top").show();
		} else {
			$('#back-top').hide();
		}
	});

	/* 回到顶部 */
	$("#back-top").click(function() {
		if($('html').scrollTop()) {
			$('html').animate({ scrollTop: 0 }, 400);
			return false;
		}
		$('body').animate({ scrollTop: 0 }, 400);
		return false;
	});

	/* 收藏，取消收藏 */
	// $(".pano-item-collect").click(function(){
	// 	var obj = $(this);
	// 	if (obj.hasClass("collected")) {
	// 		layer.msg('已取消收藏');
	// 		obj.toggleClass("collected");
	// 	} else {
	// 		layer.msg('已收藏');
	// 		obj.toggleClass("collected");
	// 	};
	// });
});

// 图片懒加载配置
window.gyLazyLoad = new LazyLoad({
    elements_selector: ".lazy",
    data_src: 'original',
    class_loading: 'lazy-loading',
    class_loaded: 'lazy-loaded',
    class_error: 'lazy-error'
});

// 更新懒加载
function lazyload() {
    window.gyLazyLoad.update();
}

// 导航栏切换透明度
function navColorToogle(selector) {
	var bannerH = $('.' + selector).height();
	if($(window).scrollTop() > bannerH - 50) {
		$('.navbar-gy').removeClass('navbar-curt');
	} else {
		$('.navbar-gy').addClass('navbar-curt');
	}
}

// 百度地图配置


// 轮播图配置
function swiperInit(classSeletor){
	var mySwiper = new Swiper('.' + classSeletor, {
		autoplay: 4000, //自动滑动：间隔时间
        autoplayDisableOnInteraction: false,
		lazyLoading: true, //图片懒加载
        autoplayStopOnLast: false,
		speed: 500, //滑动速度
		effect: dectionBrowser.isIE(9) ? 'slide' :　'fade', //滑动方式
		loop: dectionBrowser.isIE(9) ? false :　true, //环路
		pagination: '.swiper-pagination', //分页器
		paginationClickable: true, //分页器可否点击
	});
}

