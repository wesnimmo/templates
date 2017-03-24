/*====================================================
                        SERVICES
====================================================*/

$(function () {

    // animate on scroll
    new WOW().init();
});




/*====================================================
                        NAVIGATION
====================================================*/
// Show/Hide transparent black navigation
$(function () {

    $(window).scroll(function (){

        if ($(this).scrollTop() < 50) {
            // hide nav
            $("nav").removeClass("lososos-top-nav");
            $("#back-to-top").fadeOut();

        } else {
            // show nav
            $("nav").addClass("lososos-top-nav");
            $("#back-to-top").fadeIn();
        }
    });
});

// Smooth scrolling
$(function () {

    $("a.smooth-scroll").click(function (event) {

        event.preventDefault();

        // get/return id like #about, #work, #team and etc
        var section = $(this).attr("href");

        $('html, body').animate({
            scrollTop: $(section).offset().top - 64
        }, 1250, "easeInOutExpo");
    });
});

// Close mobile menu on click
$(function(){
    
    $(".navbar-collapse ul li a").on("click touch", function(){
       
        $(".navbar-toggle").click();
    });
});




/*******MOUSEOVER/MOUSEOUT*********
********HIDE/SHOW DIV OVERLAY******/

// The image turns grey on :hover thru CSS, but below
// the text is transparent in CSS and is made visible, then invisible
//again

$(".dish-col").mouseover(function(){

    $(this).find(".work-desc h2, .work-desc p").css("color", "rgba(0,0,0,1)");

});

$(".dish-col").mouseout(function(){

    $(this).find(".work-desc h2, .work-desc p").css("color", "rgba(0,0,0,0)");

});




