let userInput = document.querySelector('.user-input')
let operatorField = document.querySelector('.operatorField')
let numberButton = document.querySelectorAll('.num')
let operatorButton = document.querySelectorAll('.operators')
let backspace = document.querySelector('.backspace')
let parentheses = document.querySelectorAll('.parenthesis')
let clearButton = document.querySelector('.clear')
let equalButton = document.querySelector('.equal')

//Event Listeners
numberButton.forEach(button =>
    button.addEventListener('click', () => userInput.value += button.innerText)
);

operatorButton.forEach(button => {
    button.addEventListener('click', () => userInput.value += ` ${button.innerHTML} `);
});


backspace.addEventListener('click', () => userInput.value = userInput.value.slice(0, userInput.value.length - 1))

clearButton.addEventListener('click', () => userInput.value = '')

parentheses.forEach(button => button.addEventListener('click', () => userInput.value += button.innerText.toString()))

equalButton.addEventListener('click', () => userInput.value = eval(userInput.value))
