const menuBtn =document.querySelector('.user__btn-menu');
const closeBtn =document.querySelector('.user__btn-close');
const navigation =document.querySelector('.navigation');   
    


menuBtn.addEventListener('click',() =>{            
        navigation.classList.add('navigation-open');
        closeBtn.classList.remove('visually-hidden');
        menuBtn.classList.add('visually-hidden');     
});

closeBtn.addEventListener('click',()=>{
        navigation.classList.remove('navigation-open')        
        menuBtn.classList.add('navigation-close');
        closeBtn.classList.add('visually-hidden');
});

const effectSlider = document.querySelector('nouislider');

const createSlider =() =>{
    noUiSlider.create(effectSlider, {
    start:[0,100],
    step: 1,
    connect: true,
    range: {
        'min': 0,
        'max': 100,
    },
    /*format: {
        to: function (value) {
        if (Number.isInteger(value)) {
            return value.toFixed(0);
        }
        return value.toFixed(1);
        },
        from: function (value) {
        return parseFloat(value);
        },
    }*/});
};
createSlider();

/*new Swiper('.hero__slider',{
    slidesPerView: 2,
    spceBetween:10,
    loop:true,
    navigation:{
        prevEl:'.hero__slider_btn_prev',
        nextEl:'.hero__slider_btn_next',
    },
    autoplay:{
        delay:3000,
    },
    breakpoints:{
        560:{
            spceBetween:8,
        },
        320:{
            slidesPerView:1,
        }
    },
    },
);*/
