/***************************************************
==================== JS INDEX ======================
****************************************************
01. PreLoader Js
02. Mobile Menu JS
03. Nivo Slider JS

****************************************************/

(function ($) {
	"use strict";

	/*
	  02. Mobile Menu JS
	*/
	$('#mobile-menu').meanmenu({
		meanMenuContainer: '.mobile-menu',
		meanScreenWidth: "991",
		meanExpand: ['<i class="fal fa-plus"></i>'],
	});
	/*
	  02. Sidebar JS
	*/
	$(".sidebar-toggle-btn").on("click", function () {
		$(".sidebar-area").addClass("sidebar-opened");
		$(".body-overlay").addClass("opened");
	});

	$(".sidebar-close-btn").on("click", function () {
		$(".sidebar-area").removeClass("sidebar-opened");
		$(".body-overlay").removeClass("opened");
	});
	/*
	  03. Nivo Slider JS 
	*/
	$('#slider').nivoSlider({
		effect: 'random',
		slices: 10,
		prevText:'<i class="fa-solid fa-angle-left"></i>',
		nextText:'<i class="fa-solid fa-angle-right"></i>',
		directionNav:true,
		controlNav:false,

		
	});


    

})(jQuery); // End of use strict