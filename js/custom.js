
   // sticky top menu 
   $(window).scroll(function(){

    var scrolling = $(this).scrollTop();
    var stickyMenu = $('.navbar-light');

    if (scrolling >=100) {

      stickyMenu.addClass('nav-bg') ;  

    } else {
      stickyMenu.removeClass('nav-bg') ;
      
    }
  })


AOS.init();



$('.counter').counterUp({
  delay: 10,
  time: 1000
});


$('.image').magnificPopup({
  type:'image',
  gallery:{
    enabled:true
  }
});



// slick

$('.project-slick').slick({
  autoplaySpeed:1500,
  lazyLoad: 'ondemand',
  slidesToShow: 3,
  slidesToScroll: 1
  });


$('.blog-slick').slick({
autoplaySpeed:2000,
lazyLoad: 'ondemand',
slidesToShow: 2,
slidesToScroll: 1
});

