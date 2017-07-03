$('.main_slider').bxSlider({
    pagerCustom:'.pager_wrap',
    controls: true,
    nextSelector : '.btn_next',
    prevSelector : '.btn_prev'
});

$('.com_slider').bxSlider({
	mode : 'vertical',
	pager:false,
	nextSelector : '.btn_com_next',
	prevSelector : '.btn_com_prev',
	minSlides : 5,
	moveSlides : 1,
	auto : true,
	pause : 4000
	
});



$('.icons').on('click',function(){
    $(this).addClass('on').siblings().removeClass('on');
});