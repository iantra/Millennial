$(document).ready(update);
$(window).resize(update);

function update() {
    var div = $(".parallax");
    var width = div.width();
    div.css('height', width / 2);

    var body = $('body');
    var normalwidth = 0;
    var scrollwidth = 0;
    if (body.prop('scrollHeight') > body.height()) {
        normalwidth = window.innerWidth;
        scrollwidth = normalwidth - body.width();
        $('.container').css({ paddingLeft: scrollwidth + 'px' });
    }
}

$(window).scroll(function () {
    var scrollval = $(this).scrollTop();    // It will return scroll value
    $(".parallax").css("background-position", '50% ' + (50 - scrollval / 10) + '%');
});