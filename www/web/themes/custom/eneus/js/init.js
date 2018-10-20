NodeList.prototype.forEach = HTMLCollection.prototype.forEach = Array.prototype.forEach;

// let el = document.querySelector('.featured .card-media .card-image');
let elements = document.querySelectorAll('.featured .card-media .card-image');
Array.from(elements).forEach( (el) => {
	el.style.backgroundImage = 'url(' + el.dataset.image + ')';
});

// el.style.backgroundImage = 'url(' + el.dataset.image + ')';



(function($) {

	$.fn.jPushMenu = function(customOptions) {
		var o = $.extend({}, $.fn.jPushMenu.defaultOptions, customOptions);

		/* add class to the body.*/

		$('body').addClass(o.bodyClass);
		$(this).addClass('jPushMenuBtn');
		$(this).click(function() {
			var target         = '',
			push_direction     = '';

			if($(this).is('.'+o.showLeftClass)) {
				target         = o.showLeftClass;
			}
			else if($(this).is('.'+o.showPushLeftClass)) {
				target         = o.showPushLeftClass;
			}
			else if($(this).is('.'+o.showRightClass)) {
				target         = o.showRightClass;
			}
			else if($(this).is('.'+o.showPushRightClass)) {
				target         = o.showPushRightClass;
			}
			else if($(this).is('.'+o.showTopClass)) {
				target         = o.showTopClass;
			}
			else if($(this).is('.'+o.showBottomClass)) {
				target         = o.showBottomClass;
			}
			else if($(this).is('.'+o.showModalClass)) {
				target         = o.showModalClass;
			}

			$(this).toggleClass(o.activeClass);
			$('#'+target).toggleClass(o.menuOpenClass);

			if($(this).is('.'+o.showPushLeftClass)) {
				$('body').toggleClass( 'smart-menu-push-toright' );
				$('.overlay').toggleClass( 'active' );
			}
			else if($(this).is('.'+o.showPushRightClass)) {
				$('body').toggleClass( 'smart-menu-push-toleft' );
				$('.overlay').toggleClass( 'active' );
			}
			else if($(this).is('.'+o.showModalClass)) {
				$('.overlay').toggleClass( 'active' );
			}

			/* disable all other button*/
			$('.jPushMenuBtn, .smart-menu').not($(this)).toggleClass('disabled');
 
			return false;
		});
		var jPushMenu = {
			close: function (o) {
				$('.jPushMenuBtn, body, .smart-menu, .overlay').removeClass('disabled active smart-menu-open smart-menu-push-toleft smart-menu-push-toright');
			}
		}

		if(o.closeOnClickOutside) {
			 $('.overlay').click(function() {
				jPushMenu.close();
			 });

			 $('.smart-menu,.toggle-menu').click(function(e){
				 e.stopPropagation();
			 });
		 }
		 if(o.closeButton) {
			$('#searchview-close').click(function() {
			   jPushMenu.close();
			});
		 }
	};

   /* in case you want to customize class name,
   *  do not directly edit here, use function parameter when call jPushMenu.
   */
  $.fn.jPushMenu.defaultOptions = {
	bodyClass       		: 'smart-menu-push',
	activeClass     		: 'menu-active',
	showLeftClass   		: 'MenuLeft',
	showPushLeftClass       : 'PushMenuLeft',
	showRightClass  		: 'MenuRight',
	showPushRightClass      : 'PushMenuRight',
	showTopClass    		: 'MenuTop',
	showBottomClass 		: 'MenuBottom',
	showModalClass	 		: 'MenuModal',
	menuOpenClass   		: 'smart-menu-open',
	closeOnClickOutside		: true,
	closeButton				: '#searchview-close'
};
	var SubMenuH = $('.subBoxHederMenu').height();
	var clicks = 0;
					//
	        // $('a').click(function(){
	        //   if(clicks == 0){
	        //     //$('.headerMenu').animate({height:SubMenuH});
	        //     clicks++;
	        //     console.log("abierto");
	        //   }else{
	        //     //$('.headerMenu').animate({height:"55px"});
	        //     clicks--;
	        //     console.log("cerrado");
	        //   }
	        //   console.log(clicks);
	        // });


})(jQuery);

