"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var JSCCommon = {
	// часть вызов скриптов здесь, для использования при AJAX
	btnToggleMenuMobile: [].slice.call(document.querySelectorAll(".toggle-menu-mobile--js")),
	menuMobile: document.querySelector(".menu-mobile--js"),
	menuMobileLink: [].slice.call(document.querySelectorAll(".menu-mobile--js ul li a")),
	modalCall: function modalCall() {
		$(".link-modal").fancybox({
			arrows: false,
			infobar: false,
			touch: false,
			type: 'inline',
			autoFocus: false,
			i18n: {
				en: {
					CLOSE: "Закрыть",
					NEXT: "Вперед",
					PREV: "Назад" // PLAY_START: "Start slideshow",
					// PLAY_STOP: "Pause slideshow",
					// FULL_SCREEN: "Full screen",
					// THUMBS: "Thumbnails",
					// DOWNLOAD: "Download",
					// SHARE: "Share",
					// ZOOM: "Zoom"

				}
			}
		});
		$(".modal-close-js").click(function () {
			$.fancybox.close();
		});
		$.fancybox.defaults.backFocus = false;
		var linkModal = document.querySelectorAll('.link-modal');

		function addData() {
			linkModal.forEach(function (element) {
				element.addEventListener('click', function () {
					var modal = document.querySelector(element.getAttribute("href"));
					var data = element.dataset;

					function setValue(val, elem) {
						if (elem && val) {
							var el = modal.querySelector(elem);
							el.tagName == "INPUT" ? el.value = val : el.innerHTML = val; // console.log(modal.querySelector(elem).tagName)
						}
					}

					setValue(data.title, '.ttu');
					setValue(data.text, '.after-headline');
					setValue(data.btn, '.btn');
					setValue(data.order, '.order');
				});
			});
		}

		if (linkModal) addData();
	},
	// /modalCall
	// toggleMenu() {
	// 	if (this.btnToggleMenuMobile) {
	// 		this.btnToggleMenuMobile.forEach(element => {
	// 			element.addEventListener('click', () => {
	// 				this.btnToggleMenuMobile.forEach(element => element.classList.toggle("on"));
	// 				this.menuMobile.classList.toggle("active");
	// 				document.body.classList.toggle("fixed");
	// 				return false;
	// 			});
	// 		});
	// 	}
	// },
	// closeMenu() {
	// 	if (this.menuMobile) {
	// 		this.btnToggleMenuMobile.forEach(element => {
	// 			element.classList.remove("on");
	// 		});
	// 		this.menuMobile.classList.remove("active");
	// 		document.body.classList.remove("fixed");
	// 	}
	// },
	// mobileMenu() {
	// 	if (this.menuMobileLink) {
	// 		this.toggleMenu();
	// 		document.addEventListener('mouseup', (event) => {
	// 			let container = event.target.closest(".menu-mobile--js.active"); // (1)
	// 			if (!container) {
	// 				this.closeMenu();
	// 			}
	// 		}, { passive: true });
	// 		window.addEventListener('resize', () => {
	// 			if (window.matchMedia("(min-width: 992px)").matches) {
	// 				JSCCommon.closeMenu();
	// 			}
	// 		}, { passive: true });
	// 	}
	// },
	// /mobileMenu
	// табы  .
	tabscostume: function tabscostume(tab) {
		var tabs = {
			Btn: [].slice.call(document.querySelectorAll(".".concat(tab, "__btn"))),
			BtnParent: [].slice.call(document.querySelectorAll(".".concat(tab, "__caption"))),
			Content: [].slice.call(document.querySelectorAll(".".concat(tab, "__content")))
		};
		tabs.Btn.forEach(function (element, index) {
			element.addEventListener('click', function () {
				if (!element.classList.contains('active')) {
					var siblings = element.parentNode.querySelector(".".concat(tab, "__btn.active"));
					var siblingsContent = tabs.Content[index].parentNode.querySelector(".".concat(tab, "__content.active"));
					siblings.classList.remove('active');
					siblingsContent.classList.remove('active');
					element.classList.add('active');
					tabs.Content[index].classList.add('active');
				}
			});
		}); // $('.' + tab + '__caption').on('click', '.' + tab + '__btn:not(.active)', function (e) {
		// 	$(this)
		// 		.addClass('active').siblings().removeClass('active')
		// 		.closest('.' + tab).find('.' + tab + '__content').hide().removeClass('active')
		// 		.eq($(this).index()).fadeIn().addClass('active');
		// });
	},
	// /табы
	inputMask: function inputMask() {
		// mask for input
		var InputTel = [].slice.call(document.querySelectorAll('input[type="tel"]'));
		InputTel.forEach(function (element) {
			element.setAttribute("pattern", "[+][0-9]{1}[(][0-9]{3}[)][0-9]{3}-[0-9]{2}-[0-9]{2}");
		});
		Inputmask("+9(999)999-99-99").mask(InputTel);
	},
	// /inputMask
	ifie: function ifie() {
		var isIE11 = !!window.MSInputMethodContext && !!document.documentMode;

		if (isIE11) {
			$("body").prepend('<p   class="browsehappy container">К сожалению, вы используете устаревший браузер. Пожалуйста, <a href="http://browsehappy.com/" target="_blank">обновите ваш браузер</a>, чтобы улучшить производительность, качество отображаемого материала и повысить безопасность.</p>');
		}
	},
	// sendForm() {
	// 	var gets = (function () {
	// 		var a = window.location.search;
	// 		var b = new Object();
	// 		var c;
	// 		a = a.substring(1).split("&");
	// 		for (var i = 0; i < a.length; i++) {
	// 			c = a[i].split("=");
	// 			b[c[0]] = c[1];
	// 		}
	// 		return b;
	// 	})();
	// 	// form
	// 	$("form").submit(function (e) {
	// 		e.preventDefault();
	// 		const th = $(this);
	// 		var data = th.serialize();
	// 		th.find('.utm_source').val(decodeURIComponent(gets['utm_source'] || ''));
	// 		th.find('.utm_term').val(decodeURIComponent(gets['utm_term'] || ''));
	// 		th.find('.utm_medium').val(decodeURIComponent(gets['utm_medium'] || ''));
	// 		th.find('.utm_campaign').val(decodeURIComponent(gets['utm_campaign'] || ''));
	// 		$.ajax({
	// 			url: 'action.php',
	// 			type: 'POST',
	// 			data: data,
	// 		}).done(function (data) {
	// 			$.fancybox.close();
	// 			$.fancybox.open({
	// 				src: '#modal-thanks',
	// 				type: 'inline'
	// 			});
	// 			// window.location.replace("/thanks.html");
	// 			setTimeout(function () {
	// 				// Done Functions
	// 				th.trigger("reset");
	// 				// $.magnificPopup.close();
	// 				// ym(53383120, 'reachGoal', 'zakaz');
	// 				// yaCounter55828534.reachGoal('zakaz');
	// 			}, 4000);
	// 		}).fail(function () { });
	// 	});
	// },
	heightwindow: function heightwindow() {
		// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
		var vh = window.innerHeight * 0.01; // Then we set the value in the --vh custom property to the root of the document

		document.documentElement.style.setProperty('--vh', "".concat(vh, "px")); // We listen to the resize event

		window.addEventListener('resize', function () {
			// We execute the same script as before
			var vh = window.innerHeight * 0.01;
			document.documentElement.style.setProperty('--vh', "".concat(vh, "px"));
		}, {
			passive: true
		});
	} // animateScroll() {
	// 	// листалка по стр
	// 	$(" .top-nav li a, .scroll-link").click(function () {
	// 		const elementClick = $(this).attr("href");
	// 		const destination = $(elementClick).offset().top;
	// 		$('html, body').animate({ scrollTop: destination }, 1100);
	// 		return false;
	// 	});
	// }

};
var $ = jQuery;

function eventHandler() {
	JSCCommon.modalCall(); // JSCCommon.tabscostume('tabs');
	// JSCCommon.mobileMenu();

	JSCCommon.inputMask();
	JSCCommon.ifie(); // JSCCommon.sendForm();

	JSCCommon.heightwindow(); // JSCCommon.animateScroll();
	// JSCCommon.CustomInputFile();
	// добавляет подложку для pixel perfect
	// let screenName;
	// screenName = '011.png';
	// screenName
	// 	? $(".main-wrapper").after(`<div class="pixel-perfect" style="background-image: url(screen/${screenName});"></div>`)
	// 	: '';
	// /добавляет подложку для pixel perfect
	// function whenResize() {
	// 	const topH = document.querySelector('header').scrollHeight;
	// 	let stickyElement = document.querySelector('.top-nav')
	// 	window.onscroll = () => {
	// 		if ($(window).scrollTop() > topH) {
	// 			stickyElement.classList.add('fixed');
	// 		} else {
	// 			stickyElement.classList.remove('fixed');
	// 		}
	// 	};
	// }
	// window.addEventListener('resize', () => {
	// 	whenResize();
	// }, { passive: true });
	// whenResize();

	var sliderReviews = new Swiper('.sliderReviews-js', {
		slidesPerView: 1,
		watchOverflow: true,
		spaceBetween: 30,
		loop: false,
		lazy: {
			loadPrevNext: true,
			loadPrevNextAmount: 4
		},
		navigation: {
			nextEl: '.sliderReviews-next',
			prevEl: '.sliderReviews-prev'
		},
		pagination: {
			el: $(this).find('.swiper-pagination'),
			clickable: true
		}
	});
	var sliderReviews2 = new Swiper('.sliderReviews-02-js', {
		slidesPerView: 1,
		watchOverflow: true,
		spaceBetween: 30,
		loop: false,
		breakpoints: {
			576: {
				slidesPerView: 2,
				freeMode: true,
				freeModeMomentum: true // spaceBetween: 30,

			}
		},
		lazy: {
			loadPrevNext: true,
			loadPrevNextAmount: 4
		},
		// navigation: {
		// 	nextEl: '.sliderReviews-next',
		// 	prevEl: '.sliderReviews-prev',
		// },
		pagination: {
			el: $(this).find('.swiper-pagination'),
			clickable: true
		}
	});
	var sliderReviewsText = new Swiper('.sliderReviewsText-js', _defineProperty({
		slidesPerView: 'auto',
		watchOverflow: true,
		spaceBetween: 10,
		loop: false,
		lazy: {
			loadPrevNext: true,
			loadPrevNextAmount: 3
		},
		pagination: {
			el: $(this).find('.swiper-pagin'),
			clickable: true
		},
		// freeMode: true,
		freeModeMomentum: true
	}, "watchOverflow", true));
	var sliderAbout = new Swiper('.sliderAbout-js', {
		slidesPerView: 1,
		watchOverflow: true,
		spaceBetween: 30,
		loop: true,
		lazy: {
			loadPrevNext: true,
			loadPrevNextAmount: 3
		},
		navigation: {
			nextEl: '.sliderAbout-next',
			prevEl: '.sliderAbout-prev'
		},
		pagination: {
			el: $(this).find('.swiper-pagination'),
			clickable: true
		},
		breakpoints: {
			576: {
				slidesPerView: 2
			},
			992: {
				slidesPerView: 3
			}
		}
	});
	var sliderAboutTile = new Swiper('.sliderAboutTile-js', {
		slidesPerView: 1,
		watchOverflow: true,
		spaceBetween: 30,
		loop: true,
		lazy: {
			loadPrevNext: true,
			loadPrevNextAmount: 3
		},
		pagination: {
			el: $(this).find('.swiper-pagination'),
			clickable: true
		},
		breakpoints: {
			576: {
				slidesPerView: 2
			},
			992: {
				slidesPerView: 3
			}
		}
	}); // $('.grid').masonry({
	// 	// set itemSelector so .grid-sizer is not used in layout
	// 	itemSelector: '.grid-item',
	// 	// use element for option
	// 	columnWidth: '.grid-sizer',
	// 	percentPosition: true
	// })
	// const headerBlock = new Swiper('.headerSlider-js', {
	// 	// slidesPerView: 5,
	// 	slidesPerView: 1,
	// 	watchOverflow: true,
	// 	spaceBetween: 0,
	// 	loop: true,
	// 	autoplay: {
	// 		delay: 8000,
	// 	},
	// });
	// modal window
}

;

if (document.readyState !== 'loading') {
	eventHandler();
} else {
	document.addEventListener('DOMContentLoaded', eventHandler);
}