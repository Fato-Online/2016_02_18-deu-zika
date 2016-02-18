$(document).ready(function(){
	 // MENU FATO
        $("#menu-open").click(function() {
            $(".menu-header").css("top", 0);
            $(this).css("display", "none");
            $("#menu-close").css("display", "block");
        });

        $("#menu-close").click(function() {
            $(".menu-header").css("top", -59);
            $(this).css("display", "none");
            $("#menu-open").css("display", "block");
        });
	 // JS PESSOAL

	 $('.bxslider').bxSlider({
			pagerCustom: '#bx-pager'
	 });

	 // MITOS
	 $('.resposta').slideUp(400);

	 $('.pergunta-01').click(function() {
			$('#resposta-01').slideDown(400);
	 });
	 $('#proximo-01').click(function() {
		$('.resposta').slideUp(400);
		$('#pergunta-01').css('display', 'none');
		$('#pergunta-02').css('display', 'block');
	 });

	 $('.pergunta-02').click(function() {
			$('#resposta-02').slideDown(400);
	 });
	 $('#proximo-02').click(function() {
		$('.resposta').slideUp(400);
		$('#pergunta-02').css('display', 'none');
		$('#pergunta-03').css('display', 'block');
	 });

	 $('.pergunta-03').click(function() {
			$('#resposta-03').slideDown(400);
	 });
	 $('#proximo-03').click(function() {
		$('.resposta').slideUp(400);
		$('#pergunta-03').css('display', 'none');
		$('#pergunta-04').css('display', 'block');
	 });

	 $('.pergunta-04').click(function() {
			$('#resposta-04').slideDown(400);
	 });
	 $('#proximo-04').click(function() {
		$('.resposta').slideUp(400);
		$('#pergunta-04').css('display', 'none');
		$('#pergunta-05').css('display', 'block');
	 });

	 $('.pergunta-05').click(function() {
			$('#resposta-05').slideDown(400);
	 });
	 $('#proximo-05').click(function() {
		$('.resposta').slideUp(400);
		$('#pergunta-05').css('display', 'none');
		$('#pergunta-06').css('display', 'block');
	 });

	 $('.pergunta-06').click(function() {
			$('#resposta-06').slideDown(400);
	 });
	 $('#proximo-06').click(function() {
		$('.resposta').slideUp(400);
		$('#pergunta-06').css('display', 'none');
		$('#pergunta-01').css('display', 'block');
	 });



	 // DIFERENCAS
	 $(".diferencas-btn").slideUp(400);

	 $('.btn-fechar').click(function() {
		$(".diferencas-btn").slideUp(400);
	 });

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
