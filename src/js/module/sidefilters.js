import $ from "jquery";
import 'jquery-ui';

export function sidefilters () {
    // Slidedown for filters
    $('.sidefilters__filter').click(function() {
        const filterBody = $(this).next();
        const filterChevron = $(this).children('.chevron');
        if(filterBody.is(":hidden")) {
            $(filterBody).slideDown();
            $(filterChevron).css("transform","rotate(180deg)")
        } else {
            $(filterBody).slideUp();
            $(filterChevron).css("transform","rotate(0deg)")
        }
    });

    // CHECKBOX
    $.each($('.checkbox'), function(index, val) {
        if($(this).find('input').prop('checked') == true) {
            $(this).addClass('active');
        }
    });
    $(document).on('click', '.checkbox', function(event) {
        if($(this).hasClass('active')) {
            $(this).find('input').prop('checked', false);
        } else {
            $(this).find('input').prop('checked', true);
        }
        $(this).toggleClass('active');

        return false;
    });

    // PRICE SLIDER
    $("#priceSlider").slider({
        classes: {
            "ui-slider": "price-slider__slider",
            "ui-slider-handle": "price-slider__handle",
            // "ui-slider-range": "ui-corner-all ui-widget-header",
            "ui-slider-range": "price-slider__range",
        },
        range: true,
        min: 0,
        max: 397000,
        step: 1000,
        values: [0, 397000],
        slide: function( event, ui ) {
            $('#priceFrom').val(ui.values[0]);
            $('#priceTo').val(ui.values[1]);
        }
    });

    $('#priceFrom').val($('#priceSlider').slider('values', 0));
    $('#priceTo').val($('#priceSlider').slider('values', 1));

    // SORT FILTER
    $('.market__sort').each(function() {
        const _this = $(this),
            selectOption = _this.find('option'),
            selectOptionLength = selectOption.length,
            selectedOption = selectOption.filter(':selected'),
            duration = 450; // длительность анимации 
    
        _this.hide();
        _this.wrap('<div class="market__sort"></div>');
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