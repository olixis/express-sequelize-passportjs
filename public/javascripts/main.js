$(() => {
    $('.message a').click(function () {
        $('.login-form').animate({
            height: "toggle",
            opacity: "toggle"
        }, "slow");
        $('.register-form').animate({
            height: "toggle",
            opacity: "toggle"
        }, "slow");
    });

/*    $("#btnRegister").click(function () {
        var email = $("#emailR").val();
        var pw = $("#passwordR").val();


    });*/


});
function asyncLoaderDispatch() {
    $('#loading').animate({
        opacity: "toggle"
    }, "fast");
}