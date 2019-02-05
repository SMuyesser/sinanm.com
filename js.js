// Hides landing animation after it leaves screen
window.onload = function() {
	$("img#landing-img").addClass("loaded");
	setTimeout(() => {
	  $("div#landing-animation").addClass("hidden")
	}, 3000);
};

// Add click listener event to navbar links
$(document).ready(function () {
  $(".navbar-nav li a").click(function(event) {
    $(".navbar-collapse").collapse('hide');
  });
});

// Hides navbar when link is clicked
$('.navbar .navbar-collapse')
  .on('hide.bs.collapse', function () {
    console.log('menu closed');
    $('ul.navbar-nav').removeClass('active');
  })
  .on('show.bs.collapse', function () {
    console.log('menu open');
    $('ul.navbar-nav').addClass('active');
  });

// About Link
$("#about-link").on("click", function() {
	if (!$(".portfolio").hasClass("hidden")) {
		$(".portfolio").addClass("hidden");
	};	
	if (!$(".contact").hasClass("hidden")) {
		$(".contact").addClass("hidden");
	};
    $(".about").removeClass("hidden");
});

// Portfolio Link
$("#portfolio-link").on("click", function() {
	if (!$(".about").hasClass("hidden")) {
		$(".about").addClass("hidden");
	};	
	if (!$(".contact").hasClass("hidden")) {
		$(".contact").addClass("hidden");
	};
    $(".portfolio").removeClass("hidden");
});

//Contact Link
$("#contact-link").on("click", function() {
	if (!$(".about").hasClass("hidden")) {
		$(".about").addClass("hidden");
	};	
	if (!$(".portfolio").hasClass("hidden")) {
		$(".portfolio").addClass("hidden");
	};
    $(".contact").removeClass("hidden");
});