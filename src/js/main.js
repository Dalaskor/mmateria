import $ from "jquery";
import { Fancybox } from "@fancyapps/ui";

import { answerForm } from './module/answerForm.js';
import { catalogHeroSwiper } from './module/catalogHeroSwiper.js';
import { sidefilters } from './module/sidefilters.js';
import { productDetail } from './module/productDetail.js';
import { mainMenu } from './module/mainMenu.js';
import { modalOrder } from './module/modalOrder.js';
import { cart } from './module/cart.js';

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
    modalOrder();
    cart();
});