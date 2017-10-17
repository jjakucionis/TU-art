// huehuehue


// carousel on

$('.carousel').carousel({
    interval: false
});


// google map

function initMap() {
    var uluru = {lat: 54.687, lng: 25.279};
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 7,
      center: uluru
    });
    var marker = new google.maps.Marker({
      position: uluru,
      map: map
    });
  }


//   smooth scroll

	$('.anchorlink').click(function(event){

	$('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);

	event.preventDefault();

	});



