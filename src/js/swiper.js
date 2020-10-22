

import Swiper, { Navigation, Pagination } from 'swiper';
Swiper.use([Navigation, Pagination]);

let mobile = window.innerWidth;	
if (mobile < 768) {
    var swiper = new Swiper('.swiper-container', {
    spaceBetween: 30,
    pagination: {
       el: '.swiper-pagination',
       clickable: true,
    },
       slidesPerView: 'auto',
   });
}

