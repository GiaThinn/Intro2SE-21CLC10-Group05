$(document).ready(function () {
    // var items = document.querySelectorAll('#list-slider .carousel-item');
    var listSlider = document.querySelectorAll('#list-slider .carousel');

    if (window.matchMedia("(min-width: 768px)").matches) {
        var carousel = new bootstrap.Carousel(listSlider[0], {interval: false,});
        var carouselWidth = $('#list-slider .carousel-inner')[0].scrollWidth;
        var cardWidth = $('#list-slider .carousel-item').width();
        var scrollPos = 0;

        $('#list-slider .carousel-control-prev').on('click', function() {
            if (scrollPos > 0) {
                scrollPos -= cardWidth;
                $('#list-slider .carousel-inner').animate({scrollLeft: scrollPos}, 500);
            }
        });

        $('#list-slider .carousel-control-next').on('click', function() {
            if (scrollPos < carouselWidth - cardWidth) {
                scrollPos += cardWidth;
                $('#list-slider .carousel-inner').animate({scrollLeft: scrollPos}, 500);
            }
        });
    }



});