
$(function(){

	var $box_wrap = $('#box_wrap'),$windowHeight = $(window).height(),
		$box_selectLi = $('#box_select ul li'),
		boxIndex = 0,
		boxLastIndex,
		Switch = true,num;
		// boxLastTime = new Date();

	// $(window).mousewheel(function(e,d)
	// {
	// 	$windowHeight = $(this).height();
	// 	var boxNowTime = new Date();
	// 	if (boxNowTime-boxLastTime>1000)
	// 	{
	// 		boxLastTime = boxNowTime;
	// 		if (d<0)
	// 		{
	// 			boxIndex++;
	// 			num = -1;
	// 			boxIndex = Math.min(boxIndex,6);
	// 		}
	// 		else
	// 		{
	// 			boxIndex--;
	// 			num = 1;
	// 			boxIndex = Math.max(0,boxIndex);
	// 		}
    //
	// 		boxMove();
	// 	}
    //
	// })

	$box_selectLi.click(function(){

		Switch = false;
		boxLastIndex = boxIndex;
		boxIndex = $(this).index();
		boxMove();

	})


	function boxMove(){

		$('body,html').animate({scrollTop : $windowHeight*boxIndex},1000);
		$box_selectLi.eq(boxIndex).addClass('onselect').siblings().removeClass('onselect');
	}

	$(window).resize(function(){
		$windowHeight = $(window).height();
		$('body,html').scrollTop($windowHeight*boxIndex);
	})

	init();

	function init(){
		$('body,html').scrollTop(0);
	}
})
