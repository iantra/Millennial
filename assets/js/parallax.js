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

    parallax()
}

$(window).scroll(parallax);

function parallax() {
    var body = $('body');
    $(".parallax").each(function () {
        bound = this.getBoundingClientRect()
        var offset = 50 + ((bound.top / window.innerHeight) * 50)
        $(this).css("background-position", '50% ' + offset + '%');
    })
}