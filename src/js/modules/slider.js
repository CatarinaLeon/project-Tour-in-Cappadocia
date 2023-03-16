import $ from 'jquery';
import 'slick-carousel';

export function slickSlider(){
$('.container__slider').slick({
	arrows:false,
    dots: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	speed: 1000,
	easing: 'ease',
	infinite: false,
	initialSlide:0,
	adaptiveHeight: true,
})
}