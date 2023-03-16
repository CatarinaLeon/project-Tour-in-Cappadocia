import $ from 'jquery';
import 'slick-carousel';

export function slickSlider(){
$('.container__slider').slick({
	arrows:false,
    dots: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	speed: 1000,
	// тип анимации
	easing: 'ease',
	// бесконечная прокрутка слайдов
	infinite: false,
	// стартовый слайд, по умолчанию 0
	initialSlide:0,
	// Автоматическая адаптивная высота слайдера => adaptiveHeight
	adaptiveHeight: true,
	// responsive: [
	// 	{
	// 			breakpoint: 1200,
	// 			settings: {
	// 				slidesToShow: 2,
	// 				slidesToScroll: 2,
	// 			}
	// 		},
	// 		{
	// 			breakpoint: 768,
	// 			settings: {
	// 				slidesToShow: 2,
	// 				slidesToScroll: 2,
	// 			}
	// 		},
	// 		{
	// 			breakpoint: 480,
	// 			settings: {
	// 				dots: false,
	// 				slidesToShow: 1,
	// 				slidesToScroll: 1,
	// 			}
	// 		}
	// ],
	// mobileFirst:false,
	// автоматичеая прокрутка слайдов => autoplay по умол false
	// autoplay: false,
	// скорость прокрутки => autoplaySpeed
	// autoplaySpeed:3000,
	// пауза при наведении => pauseOnHover
	// pauseOnHover: true,
	// пауза в фокусе => pauseOnFocus
	// pauseOnFocus:true,
	// пауза при наведении на точки => pauseOnDotsHover
	// pauseOnDotsHover: true,
	// не свайпать мышкой => draggable
	// draggable:false,
	// не свайпать на моб устройствах => swipe
	// swipe:false,
	// touchThreshold:5,
	// touchMove:true,
	// быстро перелистивать слайды
	// waitForAnimate: false,
	// первый слайд по центру
	// centerMode:false,
	// variableWidth:false,
	// rows:1,
	// slidesPerRow:2,
	// vertical: true,
	// verticalSwiping: true,
})
}