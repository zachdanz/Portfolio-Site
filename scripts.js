AOS.init({
    duration: 1200,
  })

  var fixmeTop = $('.anchor-links').offset().top;

  $(window).scroll(function() {
      var currentScroll = $(window).scrollTop();
      if (currentScroll >= fixmeTop){
          $('.anchor-links').addClass("sticky");
      } else {
          $('.anchor-links').removeClass("sticky");
      }
  });
  
  $('.goSmoothly').click(function(event){		
      event.preventDefault();
      $(this).addClass('active');
      if( $('.anchor-links').hasClass("sticky")) {
      $('html,body').animate({
          scrollTop: $(this.hash).offset().top - 100
      }, 500);
      } else {
      $('html,body').animate({
          scrollTop: $(this.hash).offset().top - 220
      }, 500);    
      }
  });