//BildSlider
let sliders = document.querySelectorAll('._swiper');
if (sliders) {
	for (let index = 0; index < sliders.length; index++) {
		let slider = sliders[index];
		if (!slider.classList.contains('swiper-bild')) {
			let slider_items = slider.children;
			if (slider_items) {
				for (let index = 0; index < slider_items.length; index++) {
					let el = slider_items[index];
					el.classList.add('swiper-slide');
				}
			}
			let slider_content = slider.innerHTML;
			let slider_wrapper = document.createElement('div');
			slider_wrapper.classList.add('swiper-wrapper');
			slider_wrapper.innerHTML = slider_content;
			slider.innerHTML = '';
			slider.appendChild(slider_wrapper);
			slider.classList.add('swiper-bild');

			if (slider.classList.contains('_swiper_scroll')) {
				let sliderScroll = document.createElement('div');
				sliderScroll.classList.add('swiper-scrollbar');
				slider.appendChild(sliderScroll);
			}
		}
		if (slider.classList.contains('_gallery')) {
			//slider.data('lightGallery').destroy(true);
		}
	}
	sliders_bild_callback();
}

function sliders_bild_callback(params) { }

let sliderScrollItems = document.querySelectorAll('._swiper_scroll');
if (sliderScrollItems.length > 0) {
	for (let index = 0; index < sliderScrollItems.length; index++) {
		const sliderScrollItem = sliderScrollItems[index];
		const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
		const sliderScroll = new Swiper(sliderScrollItem, {
			observer: true,
			observeParents: true,
			direction: 'vertical',
			slidesPerView: 'auto',
			freeMode: true,
			scrollbar: {
				el: sliderScrollBar,
				draggable: true,
				snapOnRelease: false
			},
			mousewheel: {
				releaseOnEdges: true,
			},
		});
		sliderScroll.scrollbar.updateSize();
	}
}


function sliders_bild_callback(params) { }

let mainslider = new Swiper('.mainslider__body', {
	/*
	effect: 'fade',
	autoplay: {
		delay: 3000,
		disableOnInteraction: false,
	},
	*/
	observer: true,
	observeParents: true,
	slidesPerView: 1,
	spaceBetween: 0,
	autoHeight: true,
	speed: 800,
	//touchRatio: 0,
	//simulateTouch: false,
	loop: true,
	//preloadImages: false,
	//lazy: true,
	// Dotts
	pagination: {
		el: '.mainslider__dotts',
		clickable: true,
	},
	// Arrows
	// navigation: {
	// 	nextEl: '.about__more .more__item_next',
	// 	prevEl: '.about__more .more__item_prev',
	// },
	/*
	breakpoints: {
		320: {
			slidesPerView: 1,
			spaceBetween: 0,
			autoHeight: true,
		},
		768: {
			slidesPerView: 2,
			spaceBetween: 20,
		},
		992: {
			slidesPerView: 3,
			spaceBetween: 20,
		},
		1268: {
			slidesPerView: 4,
			spaceBetween: 30,
		},
	},
	*/
	on: {
		lazyImageReady: function () {
			ibg();
		},
	}
	// And if we need scrollbar
	//scrollbar: {
	//	el: '.swiper-scrollbar',
	//},
});
if (document.querySelector('.slider-programms__body')) {
	new Swiper('.slider-programms__body', {
		observer: true,
        observeParents: true,
		slidesPerView: 4,
		speed: 800,
		spaceBetween: 27,
		//loop: true,
		 watchOverflow: true,
		// Dotts
		pagination: {
			el: '.slider-programms__dotts',
			clickable: true,
		},
		// Arrows
		//  navigation: {
		//  	nextEl: '.slider-arrow slider-arrow_prev',
		//  	prevEl: '.slider-arrow slider-arrow_next',
		//  },
		 breakpoints: {
		 	// when window width is >= 320px
		 	320: {
		 		slidesPerView: 1,
		 		spaceBetween: 0
		 	},
		 	// when window width is >= 768px
		 	840: {
		 		slidesPerView: 3,
		 	},
		 	// when window width is >= 992px
		 	1150: {
		 		slidesPerView: 4,
		 		spaceBetween: 20
		 	}
		 	
		 }
	})
}


//Slick
$(document).ready(function () {
	$('.slider-examples__body').slick({
		arrows: true,
		dots: false,
		slidesToShow: 4,

		//	accessibility: false,
		slidesToScroll: 1,
		// 	easing: 'linear',
		infinite: false,
		// initialSlide: 0,
		//appendArrows: $('control-main-slider'),
		// variableWidth:,
		// pauseOnDotsHover:true,
		// pauseOnHover:true,
		// pauseOnFocus:true,
		// rows:1-n,
		 touchMove:true,
		// (Sliders_connect)=>asNavFor:,
		// centerMode:false.
		// autoplay:true,
		 speed:1000,
		// autoplaySpeed: 3000,
		// adaptiveHeight: true,
		draggable:true,
		 swipe:true,
		// mobileFirst: true;
		 responsive:[
		 {
		  	breakpoint: 1240,
		 	settings: {
			slidesToShow:3
		 	}
		 },
		 {
		  	breakpoint: 850,
		 	settings: {
			slidesToShow:2
		 	}
		 },
		 	{
		 		breakpoint: 550,
		 		settings: {
		 			slidesToShow:1
		 		}
		 	}
		 ]
	});
});