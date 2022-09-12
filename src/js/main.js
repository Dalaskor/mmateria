import $ from "jquery";

import {answerForm} from './module/answerForm.js';
import {catalogHeroSwiper} from './module/catalogHeroSwiper.js';
import {sidefilters} from './module/sidefilters.js';

$(document).ready(function() {
    answerForm();
    catalogHeroSwiper();
    sidefilters();
});