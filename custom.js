$(document).ready(function(){

	$('.Email').tooltip();
	
    $(".pop_up_big").hide();
    $(".small_box").click(function(){
        $(".pop_up_big").show(300);
    });
    $("#close").click(function(){
        $(".pop_up_big").hide(200);
    });


});