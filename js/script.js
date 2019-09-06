// JavaScript source code
$(document).ready(function () {
    //$('.getStarted').on('click', function () {
    //    $('.get-started-section').fadeOut('300');
    //    $('.eat-take-section').fadeIn('400');
    //});
    $('.dineIn, .takeAway').on('click', function () {
        $('.dineInTakeAway').fadeOut('300');
        setTimeout(function () {
            $('.chooseLanguage').fadeIn('300');
        }, 300);
    });
    $('.change_choice').on('click', function () {
        $('.choice_items').fadeIn('300');
    });
    $('.choice_itm').on('click', function () {
        $('.choice_items').fadeOut('300');
    });

});
