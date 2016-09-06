$(document).ready(function() {
	$('.scroll-btn').on('click',function(){
  		$('html,body').animate({scrollTop:$($(this).attr('href')).offset().top-1},800);
  		return false;
 	});
});