// открыть по кнопке "Открытие иконки"
document.getElementById('open-modal-btn').addEventListener('click', function(){
   document.getElementById('my-modal').classList.add('open')
})
// закрыть по кнопке "X"
document.getElementById('close-my-modal-dtn').addEventListener('click', function(){
   document.getElementById('my-modal').classList.remove('open')
})

// закрытие при нажатии Esc
window.addEventListener('keydown', (e) => {
   if (e.key === "Escape") {
      document.getElementById('my-modal').classList.remove('open')
   }
});

// закртие при клике вне окна 
document.querySelector('#my-modal .model__box').addEventListener('click', event =>{
   event = trut;
});
document.getElementById('my-modal').addEventListener('click', event =>{
   if(event._isClickWithInModal) return;
   event.currentTarget.classList.remove('open');
});

// выходит через 2 секунды 
let secound = 1000*2
let TimerImage = setInterval(()=>{
   document.getElementById('my-modal').classList.add('open');
}, secound);

let blockSlider = document.querySelector('body');
blockSlider.addEventListener('mouseover', () =>{
   clearInterval(TimerImage);
})