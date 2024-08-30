'use strict'
let displayNumber = '',
  mathOperator;


function dispalyUpdate() {
  if (displayNumber) {
    document.getElementById('display').innerHTML = displayNumber;
  } else {
    document.getElementById('display').innerHTML = 0;
  }
}

function readNumber() {
  let nums = document.querySelectorAll('.cal__btn');

  nums.forEach(num => {
    num.addEventListener('click', function (event) {
      event.preventDefault();
      displayNumber += num.textContent.trim();
      dispalyUpdate();
    })
  })
}

function clearDisplayOnClick() {
  let clearElem = document.getElementById('clear__btn')

  clearElem.addEventListener('click', function (event) {
    event.preventDefault();
    value.length = 0;
    clearDisplay();
  })
}

function clearDisplay() {
  displayNumber = '';
  dispalyUpdate();
}

let value = [];

function saveValue() {
  let operators = document.querySelectorAll('.math-operator');

  operators.forEach(operator => {
    operator.addEventListener('click', function (event) {
      event.preventDefault();
      saveOperator(operator);
      value.push(displayNumber.slice(0, -1));
      console.log(value);
      clearDisplay();
    })
  })
}

function saveOperator(operator) {
  if (operator.textContent.includes("+") || operator.textContent.includes("-") || operator.textContent.includes("*") || operator.textContent.includes("/")) {
    mathOperator = operator.textContent.trim();
    console.log(mathOperator);
  }
}

function solution() {
  let a = value.shift(),
    b = value.shift(),
    result;

  if (mathOperator == '+') {
    return result = +a + +b;
    value.length = 0;
  } else if (mathOperator == '-') {
    return result = a - b;
    value.length = 0;
  } else if (mathOperator == '/') {
    return result = a / b;
    value.length = 0;
  } else if (mathOperator == '*') {
    return result = a * b;
    value.length = 0;
  }
}

function resultOutput() {
  let resultBtn = document.getElementById('result__btn');

  resultBtn.addEventListener('click', function (event) {
    event.preventDefault();
    displayNumber = solution();
    dispalyUpdate();
  })
}

//ехе хех ехх хе хе ОН работает)

//далее наверное оптимизация, также надо сделать так чтобы после вывода решения, когда новое число начинаешь вводить, все стиралось для начала.
//Можно реализовать дальше 
//1) Степени
//2) М+ и М- 
//3) удаление посимвольно
//4) ограничение по количетсву символов
//5) плавающая точка

readNumber();
saveValue();
resultOutput()
clearDisplayOnClick();
dispalyUpdate();
