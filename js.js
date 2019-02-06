// Hides landing animation after it leaves screen
window.onload = function() {
    $("img#intro-img").addClass("loaded");
    setTimeout(() => {
        $("div#intro-animation").addClass("hidden")
    }, 3000);
};


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

$("#toggle").click(function() {
    $(this).toggleClass('on');
    $('#sidebar').toggleClass('active');
})



function openSlideMenu() {
    const menuWidth = $(window).width() / 3 + 83;
    $('#toggle').attr('onclick', 'closeSlideMenu()');
    document.getElementById('sidebar').style.width = menuWidth + "px";
    $('#toggle-wrapper').attr('style', 'box-shadow: none');
}

function closeSlideMenu() {
    $('#toggle').attr('onclick', 'openSlideMenu()');
    document.getElementById('sidebar').style.width = '0px';
    $('#toggle-wrapper').attr('style', 'box-shadow: 0px 2px 8px rgba(0,0,0,0.2)');
}