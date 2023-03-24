//вывод всех функций в flsFunctions
import * as flsFunctions from "./modules/functions.js";
import { slickSlider } from "./modules/slider.js";
import { sendingTheApplication } from "./modules/reserve.js";

flsFunctions.isWebp();
slickSlider();


document.addEventListener('DOMContentLoaded', function () {
    // 'use strict'
    sendingTheApplication();
})
