import $ from "jquery";
import 'jquery-ui';
import Swiper, { Navigation, Pagination } from 'swiper';

export function productDetail () {
    const prodcutDetailSideSlider = new Swiper('.detail-side-slider', {
        direction: 'vertical',
        modules: [Navigation],
        wrapperClass: 'detail-side-slider__wrapper',
        slideClass: 'detail-side-slider__slide',
        slidesPerView: 4,
        slidesPerGroup: 1,
        // spaceBetween: 35,
        loop: false,

        navigation: {
            prevEl: '.product-hero__prev-btn',
            nextEl: '.product-hero__next-btn',
        },
    });

    const prodcutDetailMainSlider = new Swiper('.detail-main-slider', {
        direction: 'vertical',
        modules: [Navigation, Pagination, ],
        wrapperClass: 'detail-main-slider__wrapper',
        slideClass: 'detail-main-slider__slide',
        slidesPerView: 1,
        slidesPerGroup: 1,
        // spaceBetween: 35,
        loop: false,

        navigation: {
            prevEl: '.product-hero__prev-btn',
            nextEl: '.product-hero__next-btn',
        },

        pagination: {
            el: '.product-hero__pagination',
            type: 'bullets',
            bulletClass: 'product-hero__bullet',
            bulletActiveClass: 'product-hero__bullet_active',
        },
    });

    // SORT FILTER
    $('.product-hero__select').each(function() {
        const _this = $(this),
            selectOption = _this.find('option'),
            selectOptionLength = selectOption.length,
            selectedOption = selectOption.filter(':selected'),
            duration = 450; // длительность анимации 
    
        _this.hide();
        _this.wrap('<div class="product-hero__select"></div>');
        $('<div>', {
            class: 'new-select',
            text: _this.children('option:disabled').text()
        }).insertAfter(_this);
    
        const selectHead = _this.next('.new-select');
        $('<div>', {
            class: 'new-select__list'
        }).insertAfter(selectHead);
    
        const selectList = selectHead.next('.new-select__list');
        for (let i = 1; i < selectOptionLength; i++) {
            $('<div>', {
                class: 'new-select__item',
                html: $('<span>', {
                    text: selectOption.eq(i).text()
                })
            })
            .attr('data-value', selectOption.eq(i).val())
            .appendTo(selectList);
        }
    
        const selectItem = selectList.find('.new-select__item');
        selectList.slideUp(0);
        selectHead.on('click', function() {
            if ( !$(this).hasClass('on') ) {
                $(this).addClass('on');
                selectList.slideDown(duration);
    
                selectItem.on('click', function() {
                    let chooseItem = $(this).data('value');
    
                    $('select').val(chooseItem).attr('selected', 'selected');
                    selectHead.text( $(this).find('span').text() );
    
                    selectList.slideUp(duration);
                    selectHead.removeClass('on');
                });
    
            } else {
                $(this).removeClass('on');
                selectList.slideUp(duration);
            }
        });
    });
}