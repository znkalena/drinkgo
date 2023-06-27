const arrowLeft =document.querySelector('.pagination__btn-left');
const arrowRight =document.querySelector('.pagination__btn-right');
const paginList =document.querySelector('.pagination__list');


paginList.addEventListener('click',(evt) => {    
    if(evt.target.innerText==='1'){        
        arrowLeft.classList.add('pagination__btn-disabled');
        
        arrowRight.classList.remove('pagination__btn-disabled')        
    }
    if(evt.target.innerText ==='3'){
        arrowRight.classList.add('pagination__btn-disabled');
        arrowLeft.classList.remove('pagination__btn-disabled')
        
    }else{
        arrowLeft.classList.remove('pagination__btn-disabled');
        arrowRight.classList.remove('pagination__btn-disabled');
    }
});
