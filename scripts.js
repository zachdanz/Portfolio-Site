// Change Nav bar color on scroll

$(document).ready(function () {
	$(window).scroll(function () {
        $('nav').toggleClass("scrolled", ($(window).scrollTop() > 600));
        $('.profile-image').toggleClass("hidden-on-arrival", ($(window).scrollTop() < 600))
     });
});

// Collapse Navbar automatically 

$('.navbar-collapse a').click(function(){
    $(".navbar-collapse").collapse('hide');
});


