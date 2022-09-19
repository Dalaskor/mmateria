import $ from 'jquery';

export function mainMenu () {
    $('#popupMenuBtn').click(function(){
        if ($('.main-menu').first().is(':hidden')) {
            $('.header').css('background-color', '#FCFBFB');
            $('.main-menu').slideDown();
        } else {
            $('.main-menu').slideUp();
            $('.header').css('background-color', '');
        }
    });
};