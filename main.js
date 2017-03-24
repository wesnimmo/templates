// $(".dish-wrap").mouseover(function(){
//     $(this).find(".dish-desc").css("display", "inline-block");
// });

// $(".dish-wrap").mouseout(function(){
//     $(this).find(".dish-desc").css("display", "hidden");
// });


$(".content-box").mouseover(function(){

    $(this).find(".content-box-inner").css("background", "rgba(240,240,240,.5)");

    $(this).find(".heading h3, .dish-desc p ").css("color", "rgba(0,0,0,.9)");
 
});


$(".content-box").mouseout(function(){

    $(this).find(".content-box-inner").css("background", "none");

    $(this).find(".heading h3, .dish-desc p ").css("color", "rgba(0,0,0,0)");
 
});





// TEST
$(".dish-col").mouseover(function(){

    $(this).find(".test-desc h2, .test-desc p").css("color", "rgba(0,0,0,1)");

});

$(".dish-col").mouseout(function(){

    $(this).find(".test-desc h2, .test-desc p").css("color", "rgba(0,0,0,0)");

});




