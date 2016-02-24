$(document).ready(function(){
	 // MITOssss
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

	 $(".diferencas-btn").click(function() {
	 	$(".diferencas-btn").slideUp(400);
	 	$(".smart").css('display', 'block');
	 });

	 $('.btn-fechar').click(function() {
		$(".diferencas-btn").slideUp(400);
		$(".smart").css('display', 'block');
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

	 $(".button-pink").click(function() {
	 		$(".smart").css('display', 'none');
	 });
});
