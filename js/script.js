$(document).ready(function() {
   new WOW().init();
  $('.button-collapse').sideNav();
  $('.parallax').parallax();
  $("body").niceScroll({
    cursorcolor:"black",
    cursorwidth:"6px",
    scrollspeed: 60
  });
  $('.scrollspy').scrollSpy();
  $('.modal').modal();

  $('.mobile-link').click(function(){
    $('.button-collapse').sideNav('hide');
  })

  // experience
  $('#experience .owl-carousel').owlCarousel({
      loop:true,
      margin:20,
      responsiveClass:true,
      nav:true,
      navText:["<button class='btn-floating btn-large waves-effect waves-light white-bg'><i class='fa fa-chevron-left text-primary'></i></button>","<button class='btn-floating btn-large waves-effect waves-light white-bg'><i class='fa fa-chevron-right text-primary'></i></button>"],
      responsive:{
          0:{
              items:1
          },
          600:{
              items:2
          },
          1000:{
              items:3,
              loop:false
          }
      }
  })

  // education
  $('#education .owl-carousel').owlCarousel({
      loop:true,
      margin:20,
      responsiveClass:true,
      nav:true,
      responsive:{
          0:{
              items:1,
              navText:["<button class='btn-floating btn-large waves-effect waves-light'><i class='fa fa-chevron-left primary-bg'></i></button>","<button class='btn-floating btn-large waves-effect waves-light'><i class='fa fa-chevron-right primary-bg'></i></button>"]
          },
          600:{
              items:2,
              navText:["<button class='btn-floating btn-large waves-effect waves-light primary-bg'><i class='fa fa-chevron-left'></i></button>","<button class='btn-floating btn-large waves-effect waves-light primary-bg'><i class='fa fa-chevron-right'></i></button>"]
          },
          1000:{
              items:3,
              navText:["<button class='btn-floating btn-large disabled'><i class='fa fa-chevron-left'></i></button>","<button class='btn-floating btn-large disabled'><i class='fa fa-chevron-right'></i></button>"],
              loop:false
          }
      }
  })

  // custom owl nav
  $("#experience .owl-nav").appendTo("#experience .custom-owl-nav");
  $("#education .owl-nav").appendTo("#education .custom-owl-nav");

});
