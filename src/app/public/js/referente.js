const $doc = $('html, body');

$('a').click(function() {
    $doc.animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 2000);
    return false;
});