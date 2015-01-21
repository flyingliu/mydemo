$(function(){
	  $("canvas.snow").let_it_snow({
		  windPower: -3,
		  speed: 1,
		  count: 20,
		  size: 10,
		  opacity: 0.00000001,
		  image: "images/xin.png"
	  });

	  $("canvas.dian").let_it_snow({
		  windPower: 2,
		  speed: 1,
		  color: "#ff0000",
		  size:10,
		  opacity: 0.00000001,
		  count: 40,
		  interaction: false
  	});

	 $("canvas.paopao").let_it_snow({
	  windPower: 0,
	  speed: 0,
	  color: "#ffffff",
	  size:20,
	  opacity: 0.00000001,
	  count: 40,
	  interaction: false
	});

	$('.letter').animate({'top':'320'},2000,'linear',function(){
		$('.gai').addClass('gaigo');
		$('.light').addClass('lightgo');
		$('.logo').addClass('logogo');
		$('.daoyin').addClass('daoyingo');
		_.delay(function(){
			$('.gai').hide();
			$('.rbg').hide();
			$('.welcome').addClass('pullUp');
		}, 2000);
		_.delay(function(){
			$('.letter').animate({'top':'1320'},1000);
			$('.welcome').addClass('welcomego');
		}, 5000);
		_.delay(function(){
			$('.showcon').animate({'opacity':'1'},500);
		}, 6000);

		_.delay(function(){
			$('.page1').animate({'opacity':'0'},500,function(){
				$('.page1').hide();
			});
			$('.page2').show();
		}, 9000);

	})
	$(".mli li").click(function(){
		$(".mli li").removeClass('active');
		$(this).addClass("active");
		var index = $(this).index();
		$(".mdl dd").removeClass('active pullUp');
		$(".mdl dd").eq(index).addClass("pullUp active");
	});

	$(".btn_right").click(function(){
		console.log(1);
		$(".rcon").addClass('active stretchRight').css({'opacity':1});

	});
	$(".rcon").click(function(){
		$(".rcon").animate({'opacity':0},1000,function(){
			$(".rcon").removeClass('active stretchRight');
			$(".mli li").removeClass('active');
			$(".mdl dd").removeClass('active pullUp');
		});
	});

	// $(".rcimg").click(function(){
	// 	return false;
	// });

	$(".btn_left").click(function(){
		$('.boxa').removeClass("openBox");
		$('.boxa').addClass("closeBox active");
	});

	touch.on('.boxa', 'swipeleft', function(ev){
		$(".rcon").addClass('active stretchRight').css({'opacity':1});
	});

	touch.on('.boxa', 'swiperight', function(ev){
		$('.boxa').removeClass("openBox");
		$('.boxa').addClass("closeBox active");
	});

	touch.on('.boxb', 'swipeleft', function(ev){
		$('.boxa').removeClass("closeBox active");
    $('.boxa').addClass("openBox");
	});


	$('.bmanu li').click(function(){
		$('.bmanu li').removeClass('active');
		$(this).addClass('active');
	});


});
