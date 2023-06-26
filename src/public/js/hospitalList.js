$(document).ready(function () {
    // Pagination
    $('.hospital-list-pgn .page-item').on('click', function () {
        $('.page-item.active').removeClass('active');
        $(this).addClass('active');
    });

    $('.hospital-list-pgn .pgn-control').on('click', function () {
        const activePage = $('.hospital-list-pgn .page-item.active');
        const nextPage = activePage.next();
        const prevPage = activePage.prev();

        if ($(this).hasClass('pgn-prev')) {
            if (prevPage.length > 0 && prevPage.hasClass('page-item')) {
                activePage.removeClass('active');
                prevPage.addClass('active');
            }
        } else {
            if (nextPage.length > 0 && nextPage.hasClass('page-item')) {
                activePage.removeClass('active');
                nextPage.addClass('active');
            }
        }
    });


    // Search
    // $('#search-hospital').on('keyup', function () {
    //     var value = $(this).val().toLowerCase();
    //     $('#hospital-list .hospital-item').filter(function () {
    //         $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
    //     });
    // });
});
