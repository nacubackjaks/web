$(document).ready(function () {

	//데스크탑-탑메뉴 오버효과_________
	$(".gnbMenu li a").hover(function () {
		$(this).css({
			"color": "#fff",
		});
		$(this).find("span").stop(true, true).slideDown(300);
	}, function () {
		$(this).css("color", "#ffcccc");
		$(this).find("span").stop(true, true).slideUp(300);
	});

	//rolling
	old=0;
	num=0;

	function paper(){
		num++;
		if(num>2){
			num=0;
		}

		$(".section3 ul li").eq(old).stop(true,true).fadeOut(1000);
		$(".section3 ul li").eq(num).stop(true,true).fadeIn(1000,
			function(){
				old=num;
			});
	}
	setInterval(paper,3000);

	/* 모바일용menu button */
	$(".mo_view").css({"right":"-60%"});
	$(".close").hide();

	$(".mo_menu_btn").click(function(){
		$(".mo_view").stop(true,true).animate(
			{"right":"0%"});
			$(".close").show();
	});

	$(".close").click(function(){
		$(".mo_view").stop(true,true).animate(
			{"right":"-60%"});
			$(".close").hide();
	});

});