// Hides landing animation after it leaves screen
window.onload = function() {
    $("img#intro-img").addClass("loaded");
    setTimeout(() => {
        $("div#intro-animation").addClass("hidden")
    }, 3000);
};

$("#toggle").click(function() {
    $(this).toggleClass('on');
    $('#sidebar').toggleClass('active');
});

function openSlideMenu() {
    const menuWidth = $(window).width() / 3 + 83;
    $('#toggle').attr('onclick', 'closeSlideMenu()');
    document.getElementById('sidebar').style.width = menuWidth + "px";
    $('#toggle-wrapper').attr('style', 'box-shadow: none')
    					.attr('style', 'left: 0px');
};

function closeSlideMenu() {
    $('#toggle').attr('onclick', 'openSlideMenu()');
    document.getElementById('sidebar').style.width = '0px';
    $('#toggle-wrapper').attr('style', 'box-shadow: 0px 2px 8px rgba(0,0,0,0.2)');
};

$( "div.gallery-item-inner" )
  .mouseenter(function() {
    $( this ).find( ".gallery-item-title" ).attr('style', 'width: 25%');
  })
  .mouseleave(function() {
    $( this ).find( ".gallery-item-title" ).attr('style', 'width: 0');
  });



