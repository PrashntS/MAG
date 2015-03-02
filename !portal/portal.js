;(function( $ ) {
	"use strict";

	$( document ).on( 'ready', function() {

		if ( $.fn.responsiveSlides ) {
			$( 'body' ).on( 'pageStart', function() {
				$( '.success-stories-rslides' ).responsiveSlides({
					pager : true,
					nav : true,
					auto: false,
				});
			});
		};

		if ( top == self ) {
			// not within iframe
			var $url = $( '.purchase-url' ),
			    href = $url.attr( 'href' );

			href += '?ref=daviedR';
			$url.attr( 'href', href );
		}

	});				
})( jQuery );