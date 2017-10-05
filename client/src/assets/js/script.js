// var loginButton = document.getElementById("loginButton");
// var registerButton = document.getElementById("registerButton");

// loginButton.onclick = function(){
//     document.querySelector("#flipper").classList.toggle("flip");
// }

// registerButton.onclick = function(){
//     document.querySelector("#flipper").classList.toggle("flip");
// }
$('#loginButton').click(function(){
    $('#flipper').addClass("flip")
})
$('#registerButton').click(function(){
    $('#flipper').toggleClass("flip")
})
$('.dropdown-menu').dropdown('toggle');
$(document).ready(function() {
    console.log('Ready for it')
    // Activate Carousel
    $("#myCarousel").carousel();
    // Enable Carousel Controls
    $(".left").click(function(){
        $("#myCarousel").carousel("prev");
    });
    $(".right").click(function(){
        $("#myCarousel").carousel("next");
    });
});

