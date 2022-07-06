// Variables
const number0 = document.querySelector('.number0');
const number1 = document.querySelector('.number1');
const number2 = document.querySelector('.number2');
const number3 = document.querySelector('.number3');
const number4 = document.querySelector('.number4');
const number5 = document.querySelector('.number5');
const number6 = document.querySelector('.number6');
const number7 = document.querySelector('.number7');
const number8 = document.querySelector('.number8');
const number9 = document.querySelector('.number9');
const input = document.getElementById('input-calc');
let accumulater = 0;

//event listeners
number0.addEventListener('click', ()=> {
  input.value = number0.innerHTML
  accumulater = input.value;
})

number1.addEventListener('click', () => {
  input.value = number1.innerHTML;
});

number2.addEventListener('click', () => {
  input.value = number2.innerHTML;
});

number3.addEventListener('click', () => {
  input.value = number3.innerHTML;
});

number4.addEventListener('click', () => {
  input.value = number4.innerHTML;
});

number5.addEventListener('click', () => {
  input.value = number5.innerHTML;
});

number6.addEventListener('click', () => {
  input.value = number6.innerHTML;
});

number7.addEventListener('click', () => {
  input.value = number7.innerHTML;
});

number8.addEventListener('click', () => {
  input.value = number8.innerHTML;
});

number9.addEventListener('click', () => {
  input.value = number9.innerHTML;
});

