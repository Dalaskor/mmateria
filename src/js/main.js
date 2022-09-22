import $ from "jquery";
import { Fancybox } from "@fancyapps/ui";

import { inputs } from './module/inputs.js';
import { answerForm } from './module/answerForm.js';
import { catalogHeroSwiper } from './module/catalogHeroSwiper.js';
import { sidefilters } from './module/sidefilters.js';
import { productDetail } from './module/productDetail.js';
import { mainMenu } from './module/mainMenu.js';
import { modalOrder } from './module/modalOrder.js';
import { cart } from './module/cart.js';
import { technologySwiper } from './module/technologySwiper.js';

Fancybox.bind('[data-fancybox="productDetail"]', {
    Toolbar: {
        display: [
            { id: "close", position: "right" },
        ],
    },
});

$(document).ready(function() {
    inputs();
    answerForm();
    catalogHeroSwiper();
    sidefilters();
    productDetail();
    mainMenu();
    modalOrder();
    cart();
    technologySwiper();
});