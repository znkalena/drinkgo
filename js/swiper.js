new Swiper('.promo__slider', {    
    slidesPerView: 1,    
    loopeSlides:true,  
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
    },    
    autoPlay:{
        delay:3000,
    }

});