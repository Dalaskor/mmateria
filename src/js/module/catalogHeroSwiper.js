import Swiper, { Navigation } from 'swiper';

export function catalogHeroSwiper () {
    const swiperCatalogHero = new Swiper('.catalog-hero__swiper', {
        modules: [Navigation],
        wrapperClass: 'catalog-hero__swiper-wrapper',
        slideClass: 'catalog-hero__swiper-slide',
        slidesPerView: 1.7,
        slidesPerGroup: 1,
        loop: true,

        navigation: {
            nextEl: '.catalog-hero__swiper-btn-next',
        },
    });
}