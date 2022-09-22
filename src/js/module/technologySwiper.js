import $ from 'jquery';
import Swiper, { Navigation, Pagination } from 'swiper';

export function technologySwiper () {
    const technologySlider = new Swiper('.slider-technology', {
        modules: [Navigation, Pagination, ],
        wrapperClass: 'slider-technology__wrapper',
        slideClass: 'slider-technology__slide',
        loop: true,

        navigation: {
            nextEl: '.slider-technology__btn',
        },

        pagination: {
            el: '.slider-technology__pagination',
            type: 'bullets',
            bulletClass: 'slider-technology__bullet',
            bulletActiveClass: 'slider-technology__bullet_active',
        },
    });

    var counters = $('.slider-technology__bullet');

    for(var i = 0; i < counters.length; i++) {
        var counter = counters[i];
        if(i < 9) {
            $(counter).text('0' + (i+1));
        } else {
            $(counter).text(i+1);
        }
    }
};