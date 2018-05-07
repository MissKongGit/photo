var total = 12;
var h_w = $(window).height()/$(window).width();
var activeIndex;

function render(total){
	var str = '';
	for(i = 0; i < total; i++){
		str += '<li><img src="images/'+ i +'.jpg"></li>'
	}
	$(str).appendTo($('.wrapper')).animate({opacity:1},500);
}
render(total);

$('.wrapper').on('tap','li',function(){
	var index = activeIndex = $(this).index();
	showImg(index);

})

function showImg(index){
	$('.show-img').html('').show();
	var oImg = new Image(),
		oImg_src = 'images/'+ index +'.jpg';
	oImg.src = oImg_src;
	oImg.onload = function(){
		var w = this.width,
			h = this.height;
		if(h/w > h_w){
			$(this).appendTo($('.show-img')).css({height:'100%'}).animate({opacity:1},500);
		}else{
			$(this).appendTo($('.show-img')).css({width:'100%'}).animate({opacity:1},500);
		}
	}
}

$('.show-img')
	.on('tap',function(){
		$(this).hide();
	})
	.on('swipeLeft',function(){
		activeIndex++;
		if(activeIndex > total - 1){
			activeIndex = total -1;
		}else{
			showImg(activeIndex);
		}

	})
	.on('swipeRight',function(){
		activeIndex--;
		if(activeIndex < 0 ){
			activeIndex = 0;
		}else{
			showImg(activeIndex);
		}
	})