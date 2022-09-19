import $ from "jquery";
import { Fancybox } from "@fancyapps/ui";

import { answerForm } from './module/answerForm.js';
import { catalogHeroSwiper } from './module/catalogHeroSwiper.js';
import { sidefilters } from './module/sidefilters.js';
import { productDetail } from './module/productDetail.js';
import { mainMenu } from './module/mainMenu.js';

Fancybox.bind('[data-fancybox="productDetail"]', {
    Toolbar: {
        display: [
            { id: "close", position: "right" },
        ],
    },
});

$(document).ready(function() {
    answerForm();
    catalogHeroSwiper();
    sidefilters();
    productDetail();
    mainMenu();
});