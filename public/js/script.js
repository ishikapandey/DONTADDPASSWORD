// Map svg file 
var modalBtn = document.querySelectorAll('.Button');
var modalBg = document.querySelectorAll('.modal-bg');
var submitBtn = document.querySelectorAll('.submit-btn');
var modalClose = document.querySelectorAll('.modal-close');

var Btn1 = document.querySelector('.etherion');
var Btn2 = document.querySelector('.silven');
var Btn3 = document.querySelector('.gorene');
var Btn4 = document.querySelector('.yitanada');
var Btn5 = document.querySelector('.denera');
var Btn6 = document.querySelector('.arthora');
var Btn7 = document.querySelector('.miorbmark');
var Btn8 = document.querySelector('.idzora');
var Btn9 = document.querySelector('.qaevia');
var Btn10 = document.querySelector('.wrafuthen');
const country=[
    {name:'denera',size: (300),ans:49.5},
    {name:'gorene',size: (400),ans:49.5},
    {name:'arthora',size: (500),ans:49.5},
    {name:'wrafuthen',size: (600),ans:49.5},
    {name:'qaevia',size: (700),ans:49.5},
    {name:'yitanada',size: (800),ans:49.5},
    {name:'etherion',size: (900),ans:49.5},
    {name:'siven',size: (1000),ans:49.5},
    {name:'idzora',size: (1000),ans:49.5},
    {name:'miorbmark',size:(1000),ans:49.5}
  ]
var min = country[0].size;
var armySize=500;
function compare(min,armySize){
return armySize<min;
}

modalBtn[0].addEventListener('click',function(){
    modalBg[0].classList.add('bg-active');
});
submitBtn[0].addEventListener('click',function(){
    if(!compare(country[0].size,armySize))
    modalBg[0].classList.remove('bg-active');
});
modalClose[0].addEventListener('click',function(){
    modalBg[0].classList.remove('bg-active');
})


modalBtn[1].addEventListener('click',function(){
    modalBg[1].classList.add('bg-active');
});
submitBtn[1].addEventListener('click',function(){
    modalBg[1].classList.remove('bg-active');
});
modalClose[1].addEventListener('click',function(){
    modalBg[1].classList.remove('bg-active');
})


modalBtn[2].addEventListener('click',function(){
    modalBg[2].classList.add('bg-active');
});
submitBtn[2].addEventListener('click',function(){
    modalBg[2].classList.remove('bg-active');
});
modalClose[2].addEventListener('click',function(){
    modalBg[2].classList.remove('bg-active');
})


Btn1.addEventListener('click',function(){
    if(!compare(country[0].size,armySize))
    modalBg[3].classList.add('bg-active');
    else{
        modalBg[3].classList.add('bg-grey');
    }
});

Btn2.addEventListener('click',function(){
    if(!compare(country[1].size,armySize))
        modalBg[3].classList.add('bg-active');
        else{
            modalBg[3].classList.add('bg-grey');
        }
});
Btn3.addEventListener('click',function(){
    if(!compare(country[2].size,armySize))
    modalBg[3].classList.add('bg-active');
    else{
            modalBg[3].classList.add('bg-grey');
        }
});
Btn4.addEventListener('click',function(){
    if(!compare(country[3].size,armySize))
    modalBg[3].classList.add('bg-active');
    else{
            modalBg[3].classList.add('bg-grey');
        }
});
Btn5.addEventListener('click',function(){
    if(!compare(country[4].size,armySize))
    modalBg[3].classList.add('bg-active');
    else{
            modalBg[3].classList.add('bg-grey');
        }
});
Btn6.addEventListener('click',function(){
    if(!compare(country[5].size,armySize))
    modalBg[3].classList.add('bg-active');
    else{
            modalBg[3].classList.add('bg-grey');
        }
});
Btn7.addEventListener('click',function(){
    if(!compare(country[6].size,armySize))
    modalBg[3].classList.add('bg-active');
    else{
            modalBg[3].classList.add('bg-grey');
        }
    
});
Btn8.addEventListener('click',function(){
    if(!compare(country[7].size,armySize))
    modalBg[3].classList.add('bg-active');
    else{
            modalBg[3].classList.add('bg-grey');
        }
    
});
Btn9.addEventListener('click',function(){
    if(!compare(country[8].size,armySize))
    modalBg[3].classList.add('bg-active');
    else{
            modalBg[3].classList.add('bg-grey');
        }
    
});
Btn10.addEventListener('click',function(){
    if(!compare(country[9].size,armySize))
    modalBg[3].classList.add('bg-active');
    else{
            modalBg[3].classList.add('bg-grey');
        }
    
});


submitBtn[3].addEventListener('click',function(){
    modalBg[3].classList.remove('bg-active');
});
modalClose[3].addEventListener('click',function(){
    modalBg[3].classList.remove('bg-active');
})



