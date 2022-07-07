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
const numberTypedIn = input.value;
let numbersClickedOn = [];


//event listeners
input.addEventListener('input', () => {
  const numberTypedIn = input.value;
  numbersClickedOn.push(numberTypedIn);
  string = numbersClickedOn.join('');
  input.value = string;
});

number0.addEventListener('click', ()=> {
  input.value = number0.innerHTML
  const zero = input.value;
  numbersClickedOn.push(zero)
  string = numbersClickedOn.join('');
  input.value = string;
  })

number1.addEventListener('click', () => {
  input.value = number1.innerHTML;
  const one = input.value;
  numbersClickedOn.push(one);
  string = numbersClickedOn.join('');
  input.value = string;
});

number2.addEventListener('click', () => {
  input.value = number2.innerHTML;
  const two = input.value;
  numbersClickedOn.push(two);
  string = numbersClickedOn.join('');
  input.value = string;
});

number3.addEventListener('click', () => {
  input.value = number3.innerHTML;
  const three = input.value;
  numbersClickedOn.push(three);
  string = numbersClickedOn.join('');
  input.value = string;
});

number4.addEventListener('click', () => {
  input.value = number4.innerHTML;
  const four = input.value;
  numbersClickedOn.push(four);
  string = numbersClickedOn.join('');
  input.value = string;
});

number5.addEventListener('click', () => {
  input.value = number5.innerHTML;
  const five = input.value;
  numbersClickedOn.push(five);
  string = numbersClickedOn.join('');
  input.value = string;
});

number6.addEventListener('click', () => {
  input.value = number6.innerHTML;
  const six = input.value;
  numbersClickedOn.push(six);
  string = numbersClickedOn.join('');
  input.value = string;
});

number7.addEventListener('click', () => {
  input.value = number7.innerHTML;
  const seven = input.value;
  numbersClickedOn.push(seven);
  string = numbersClickedOn.join('');
  input.value = string;
});

number8.addEventListener('click', () => {
  input.value = number8.innerHTML;
  const eight = input.value;
  numbersClickedOn.push(eight);
  string = numbersClickedOn.join('');
  input.value = string;
});

number9.addEventListener('click', () => {
  input.value = number9.innerHTML;
  const three = input.value;
  numbersClickedOn.push(three);
  string = numbersClickedOn.join('');
  input.value = string;
});


