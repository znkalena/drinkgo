const menuBtn =document.querySelector('.user__btn-menu');
const closeBtn =document.querySelector('.user__btn-close');
const navigation =document.querySelector('.navigation');   
    


menuBtn.addEventListener('click',() =>{            
        navigation.classList.add('navigation-open');
        closeBtn.classList.remove('user__btn-close');
        closeBtn.classList.add('btn-open');
        menuBtn.classList.add('user__btn-close');     
});

closeBtn.addEventListener('click',()=>{
        navigation.classList.remove('navigation-open');        
        menuBtn.classList.remove('user__btn-close');
        closeBtn.classList.remove('btn-open');
        closeBtn.classList.add('user__btn-close');
});

window.addEventListener('keydown',(evt) => {
    if(evt.target.key ==='Esc' || navigation.classList.contains('navigation-open')){
        navigation.classList.remove('navigation-open');        
        menuBtn.classList.remove('user__btn-close');
        closeBtn.classList.remove('btn-open');
        closeBtn.classList.add('user__btn-close');
    }
})


