$(function() {
    $('.banner').unslider({
		speed: 400,               //  The speed to animate each slide (in milliseconds)
		delay: 2000,              //  The delay between slide animations (in milliseconds)
		complete: function() {},  //  A function that gets called after every slide animation
		keys: true,               //  Enable keyboard (left, right) arrow shortcuts
		dots: true,               //  Display dot navigation
		fluid: false,              //  Support responsive design. May break non-responsive designs
	});

	/**
	 * Most jQuery.localScroll's settings, actually belong to jQuery.ScrollTo, check it's demo for an example of each option.
	 * @see http://flesler.demos.com/jquery/scrollTo/
	 * You can use EVERY single setting of jQuery.ScrollTo, in the settings hash you send to jQuery.LocalScroll.
	 */
	
	// The default axis is 'y', but in this demo, I want to scroll both
	// You can modify any default like this
	// $.localScroll.defaults.axis = 'xy';
	
	/**
	 * NOTE: I use $.localScroll instead of $('#navigation').localScroll() so I
	 * also affect the >> and << links. I want every link in the page to scroll.
	 */
	$.localScroll({
		target: 'body', // could be a selector or a jQuery object too.
		queue:true,
		duration:500,
		hash:true,
		onBefore:function( e, anchor, $target ){
			// The 'this' is the settings object, can be modified
		},
		onAfter:function( anchor, settings ){
			// The 'this' contains the scrolled element (#content)
		}
	});

});