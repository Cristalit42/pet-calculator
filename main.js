'use strict'

let displayNumber = '',
  displaySymbol;


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
      event.preventDefault;
      displayNumber += num.textContent.trim();
      dispalyUpdate();
    })
  })
}

function clearDisplay() {
  let clearElem = document.getElementById('clear__btn')

  clearElem.addEventListener('click', function (event) {
    displayNumber = '';
    dispalyUpdate();
  })
}

function result() {
  let resultElem = document.getElementById('result__btn');

  resultElem.addEventListener('click', function (event) {
    event.preventDefault();
    let displayInfo = document.getElementById('display').textContent;
    displayNumber = '';
    console.log(displayNumber, displayInfo);
    displayNumber = eval(displayInfo);
    dispalyUpdate();
  })
}

//отсановился на решении проблемы с "="

readNumber()
clearDisplay()
result();
dispalyUpdate();
