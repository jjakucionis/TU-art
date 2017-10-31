$(document).ready(function() {

// smooth scroll

	$('.anchorlink').click(function(event){

	$('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);

	event.preventDefault();

	});



// burger menu

$('#burger-toggle').click(function() {
  $(this).toggleClass('toggle-active');
  $('#overlay').toggleClass('nav-active');
});

$('#overlay ul li a').click(function() {
  $('#overlay').toggleClass('nav-active');
  $('#burger-toggle').toggleClass('toggle-active');

});

// hidden img show more 

$('#show-more').click(function() {
  if ($('.hidden-img').hasClass('visible-img')) {
    $('.hidden-img').removeClass('visible-img');
    document.getElementById("show-more").textContent="show less";
  } else {
    $('.hidden-img').addClass('visible-img');   
    $('html, body').animate({scrollTop: $("#work").offset().top}, 300);
    document.getElementById("show-more").textContent="show me more!";
  }
});

// store slider

  $('#slider-content').slick({
    prevArrow: $('.prev'),
    nextArrow: $('.next'),
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        }
      }
    ]
  });

  // say hello button

   $('#say-hello').click(function() {
    $('#contactForm').fadeToggle();
  })
  $(document).mouseup(function (e) {
    var container = $("#contactForm");

    if (!container.is(e.target) // if the target of the click isn't the container...
        && container.has(e.target).length === 0) // ... nor a descendant of the container
    {
        container.fadeOut();
    }
  });

// fancybox


  $(".fancybox").fancybox();

});
