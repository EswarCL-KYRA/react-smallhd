$(document).ready(function() {
  	$('#myCarousel').carousel({
  		interval: 7000
	})
  	$('#myCarousel2').carousel({
  		interval: 3000
	})
});

$(document).on('click', function (event) {
	//alert($(this).attr('class'));
	$("body").removeClass("click-nav");

});

$('#nav-toggle').click(function() {
    $("body").toggleClass("click-nav");
    return false;
  });

$('.help-toggle').click(function() {
    $("body").toggleClass("click-help");
    return false;
  });

$('.close-toggle').click(function() {
    $("body").toggleClass("click-help");
    return false;
  });