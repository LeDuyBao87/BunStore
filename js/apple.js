
$('.btn-memory').click(function(event) {

	let memoryText = $(this).text();
	$('#memory').text(`Memory: ${memoryText}`);
	console.log(memoryText);
});