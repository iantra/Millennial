$(window).ready(function () {
    var div = $(".parallax");
    var width = div.width();
    div.css('height', width / 2);
});

$(window).scroll(function () {
    var scrollval = $(this).scrollTop();    // It will return scroll value
    $(".parallax").css("background-position", '50% ' + (50 - scrollval / 10) + '%');
});