const btn = document.querySelector('button')
const vid = document.querySelector('video')
const clear = document.querySelector('.clearBtn');
const screen = document.querySelector('.screen');
const del = document.querySelector('.deleteBtn');
const one = document.querySelector('.btn1');
const two = document.querySelector('.btn2');
const three = document.querySelector('.btn3');
const four = document.querySelector('.btn4');
const plus = document.querySelector('.btnPlus');
const equal = document.querySelector('.btnEqual');

function myFunction() {

  if (vid.paused) {
    vid.play();
    btn.textContent = 'PAUSE'
  } else {
    vid.pause();
    btn.textContent = 'PLAY'
  }
}


clear.addEventListener('click', function(){
  document.querySelector('.screen').textContent = 'Enter a number';
})

del.addEventListener('click', function(){
  document.querySelector('.screen').textContent = '0';
})

one.addEventListener('click', function(){
  document.querySelector('.screen').textContent = '1';
})

two.addEventListener('click', function(){
  document.querySelector('.screen').textContent = '2';
})

three.addEventListener('click', function(){
  document.querySelector('.screen').textContent = '3';
})

four.addEventListener('click', function(){
  document.querySelector('.screen').textContent = '4';
})

plus.addEventListener('click', function(){
  document.querySelector('.screen').textContent = '+';
})

equal.addEventListener('click', function(){
  document.querySelector('.screen').textContent = '=';
})