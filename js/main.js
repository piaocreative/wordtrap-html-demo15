$(document).ready(function() {

	// Banner Slider
	if ( $('#banner-slider').length ) {
		$('#banner-slider').slick({
			dots: true,
			arrows: true,
			infinite: true,
			speed: 1000,
			fade: true,
			cssEase: 'linear',
			autoplay: true,
			customPaging : function(slider, i) {
				var numberDots = i + 1;
				if ( numberDots < 10 )
					numberDots = '0' + numberDots;
				return '<a>' + numberDots + '</a>';
			},
			responsive: [
				{
					breakpoint: 992,
					settings: {
						dots: false,
						arrows: false
					}
				},
			]
		});
	}

    // Logos slider
    if ( $( '.logos' ).length ) {
		$( '.logos' ).slick({
			infinite: true,
			slidesToShow: 5,
			slidesToScroll: 1,
			dots: false,
			arrows: false,
			responsive: [
				{
					breakpoint: 992,
					settings: {
						infinite: true,
						slidesToShow: 4,
						slidesToScroll: 1,
					}
				},
				{
					breakpoint: 768,
					settings: {
						infinite: true,
						slidesToShow: 3,
						slidesToScroll: 1,
					}
				},
				{
					breakpoint: 480,
					settings: {
						infinite: true,
						slidesToShow: 2,
						slidesToScroll: 1,
					}
				}
			]
		});
	}


	// Range Slider
	if ( $( '[data-slider]' ).length ) {
		$( '[data-slider]' ).slider({});

		$( '#price_slider' ).on( 'slide', function( evt ) {
			$( '#price_slider_value span' ).html( '$' + evt.value[0] + ' - ' + '$' + evt.value[1] );
		});
	}


	// QTY
	if ( $('.quantity').length ) {
		$('.quantity').each(function() {
			var $this = $(this);
			var $qty = $this.find('.qty');
			var $plusBtn = $this.find('#plus-btn');
			var $minusBtn = $this.find('#minus-btn');

			$plusBtn.click(function(evt) {
				evt.preventDefault();
				$qty.val(parseInt($qty.val()) + 1 );
			});
			$minusBtn.click(function(evt) {
				evt.preventDefault();
				$qty.val(parseInt($qty.val()) - 1 );
				if ($qty.val() == 0) {
					$qty.val(1);
				}
			});
		});
	}

});