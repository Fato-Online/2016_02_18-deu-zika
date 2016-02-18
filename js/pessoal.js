$(document).ready(function(){
	 $('.bxslider').bxSlider({
	 		pagerCustom: '#bx-pager'
	 });

	 $('.btn-fechar').click(function() {
	 	$(".diferencas-btn").slideUp(400);
	 });

	 $(".diferencas-btn").slideUp(400);
	 $("#btn-chikungunya").click(function() {
	 		$("#diferenca-chikungunya").slideDown(400);
	 });

	 $("#btn-dengue").click(function() {
	 	$("#diferenca-dengue").slideDown(400);
	 });

	 $("#btn-zika").click(function() {
	 	$("#diferenca-zika").slideDown(400);
	 });
});
