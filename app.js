let inputField = document.querySelector('.input-field')
let operatorField = document.querySelector('.operatorField')
let numberButton = document.querySelectorAll('.num')
let operatorButton = document.querySelectorAll('.operators')
let backspace = document.querySelector('.backspace')
let parentheses = document.querySelectorAll('.parenthesis')
let clearButton = document.querySelector('.clear')
let equalButton = document.querySelector('.equal')

//Event Listeners
numberButton.forEach(button =>
    button.addEventListener('click', () => inputField.value += button.innerText)
);

operatorButton.forEach(button => {
    button.addEventListener('click', () => inputField.value += ` ${button.innerHTML} `);
});

// how do i make it do the flashing line thing as i type?
backspace.addEventListener('click', () => inputField.value = inputField.value.slice(0, inputField.value.length - 1))

clearButton.addEventListener('click', () => inputField.value = '')

parentheses.forEach(button => button.addEventListener('click', () => inputField.value += button.innerText.toString()))

equalButton.addEventListener('click', () => inputField.value = eval(inputField.value))
