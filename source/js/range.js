const rangeSlider = document.querySelector('#nouislider');
const inputLeft =document.querySelector('.inputwrap__input-left');
const inputRight =document.querySelector('.inputwrap__input-right');
const inputs =[inputLeft,inputRight]

if(rangeSlider){
    noUiSlider.create(rangeSlider, {
        start:[0,115],
        step: 1,
        connect: true,
        range: {
            'min': 0,
            'max': 123,
        },
    });

    rangeSlider.noUiSlider.on('update', (values, handle) =>{
    inputs[handle].value = Math.round(values[handle]);    
    })
    };
