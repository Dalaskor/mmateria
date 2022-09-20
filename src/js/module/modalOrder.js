import $ from 'jquery';

export function modalOrder () {
    $('.product-hero__button_order').click(function() {
		$('.fade').fadeIn();
        $('body').toggleClass('scroll-lock');
        $('.modal-order').show();
        $('.modal-order-ready').hide();
		return false;
	});	

    // Клик по ссылке "Закрыть".
	$('.modal-order__close').click(function() {
		$(this).parents('.fade').fadeOut();
        $('body').toggleClass('scroll-lock');

		return false;
	});        
 
	// Закрытие по клавише Esc.
	$(document).keydown(function(e) {
		if (e.keyCode === 27) {
			e.stopPropagation();
            $('body').toggleClass('scroll-lock');
			$('.fade').fadeOut();
		}
	});
	
	// Клик по фону, но не по окну.
	$('.fade').click(function(e) {
		if ($(e.target).closest('.modal-order').length == 0) {
            $('body').toggleClass('scroll-lock');
			$(this).fadeOut();
		}
	});

    $('.modal-order__submit').click(function() {
        $('.modal-order').hide();
        $('.modal-order-ready').show();
    });
};