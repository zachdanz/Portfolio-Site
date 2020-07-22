// Change Nav bar color on scroll

$(document).ready(function () {
	$(window).scroll(function () {
        $('nav').toggleClass("scrolled", ($(window).scrollTop() > 600));
        console.log("123")
     });
});




// Collapse Navbar automatically 

$('.navbar-collapse a').click(function(){
    $(".navbar-collapse").collapse('hide');
});