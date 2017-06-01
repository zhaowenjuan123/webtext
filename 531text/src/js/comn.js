(function() {
		function a() {
			var a = document.getElementsByTagName("html")[0],
				b = document.documentElement.clientWidth;
			640 <= b && (b = 640);
			a.style.fontSize = b / 20 / 18.75 * 625 + "%"
		}
		a();
		var b;
		window.addEventListener("resize",
			function() {
				clearTimeout(b);
				b = setTimeout(a, 300)
			}, !1);
		window.addEventListener("pageshow", function(c) {
			c.persisted && (clearTimeout(b), b = setTimeout(a, 300))
		}, !1);
	})();
	

var $=require("./com/jquery-1.11.0.min.js");
require("./com/swiper.min.js");
var swiperAnimateCache = require("com/swiper.animate1.0.2.min.js").swiperAnimateCache;
var swiperAnimate = require("com/swiper.animate1.0.2.min.js").swiperAnimate;
var tpl = require("tpl/index.string");
$("body").prepend(tpl);

    $.ajax({
    	url: '/api/ListJson.do',
    	type: 'GET',
    	dataType: 'json',
    	data: "",
    	success:function(res){
    			console.log(res);
    		$.each(res.data, function(index, value){
    			$(".adds").prepend(value.title)
    		})
    	}
    })
    
	var mySwiper = new Swiper('.swiper-container', {
		direction: 'vertical',
		/*effect : 'coverflow',*/
		loop: true,

		// 如果需要分页器
		pagination: '.swiper-pagination',
		onInit: function(swiper) { //Swiper2.x的初始化是onFirstInit
			swiperAnimateCache(swiper); //隐藏动画元素 
			swiperAnimate(swiper); //初始化完成开始动画
		},
		onSlideChangeEnd: function(swiper) {
			swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
			
			//自己添加东动画
			var index=swiper.activeIndex;
			$(".w1").removeClass("onwei1");
			$(".w2").removeClass("onwei1");
			if(index==2){
				$(".w1").addClass("onwei1");
			}else{
				$(".w1").removeClass("onwei1");
			}
			if(index==3){
				$(".w2").addClass("onwei1");
			}else{
				$(".w2").removeClass("onwei1");
			}
			
		}
		
		
	});
	
	
	

	$("audio")[0].play();
	
	$(".audio").on("click", function() {
		//animationPlayState 规定属性是运行还是暂停
		if ($("audio")[0].paused == false) {
			$("audio")[0].pause();
			$("#imgs").attr("src", "img/mius1.png");
			$(this).css("animationPlayState", "paused");
		} else {
			$("audio")[0].play();
			$("#imgs").attr("src", "img/mius2.png");
			$(this).css("animationPlayState", "running");
		}
	})
	
	
	
	
	
	
	
