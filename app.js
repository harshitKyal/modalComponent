$(document).ready( () => {

	$(".modal-view").hide();  

	$("#modal-button").click(() => {  //click to open modal

	
		$(".modal-view").slideDown("medium");
	});

	$("#close").click(() => {

		
		$(".modal-view").slideUp("medium");
	});

	$("#close-sign").click(() => {

		
		$(".modal-view").slideUp("medium");
	});
});