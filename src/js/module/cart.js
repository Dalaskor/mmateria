import $ from 'jquery';

export function cart () {
    var productCount = 1;

    $('.cart-item__plus').click(function () {
        productCount = Number($(this).siblings('.cart-item__num').text());
        productCount += 1;
        $(this).siblings('.cart-item__num').text(productCount);
    });

    $('.cart-item__minus').click(function () {
        productCount = Number($(this).siblings('.cart-item__num').text());
        if(productCount > 1) {
            productCount -= 1;
            $(this).siblings('.cart-item__num').text(productCount);
        }
    });
};