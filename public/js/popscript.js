var modalBtn = document.querySelector('.modal-btn');
var modalBg = document.querySelector('.modal-bg');
var span_tag = document.getElementById('show-time');
var submitBtn = document.querySelector('.submit-btn');
const startingMinutes = 2;
let time = startingMinutes*60;

modalBtn.addEventListener('click',function(){
    modalBg.classList.add('bg-active');
    countdown_call = setInterval(updateTime,1000);
});
submitBtn.addEventListener('click',function(){
    modalBg.classList.remove('bg-active');
});

function closeModal(){
    modalBg.classList.remove('bg-active');
}

function updateTime(){
    const minutes = Math.floor(time/60);
    let seconds = time%60;
    if(seconds<10){
        seconds='0'+seconds;
    }
    span_tag.innerHTML = minutes + ":" + seconds;
    if(minutes == 0 && seconds == 0){
        clearInterval(countdown_call);
        closeModal();
        time=2*60;
    }
    time--;
}