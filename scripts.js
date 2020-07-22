// Change Nav bar color on scroll

$(document).ready(function () {
	$(window).scroll(function () {
        $('nav').toggleClass("scrolled", ($(window).scrollTop() > 600));
     });
});

// Collapse Navbar automatically 

$('.navbar-collapse a').click(function(){
    $(".navbar-collapse").collapse('hide');
});

//Smooth navigation to Nav anchors

// $('.nav-link').click(function() {
//     var sectionTo = $(this).attr('href');
//     $('html, body').animate({
//       scrollTop: $(sectionTo).offset().top
//     }, 1500);
// });