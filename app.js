let part1 = document.querySelector('.part1')
let part2 = document.querySelector('.part2')
let operatorField = document.querySelector('.operatorField')
let numberButton = document.querySelectorAll('.num')
let operatorButton = document.querySelectorAll('.operators')
let backspace = document.querySelector('.backspace')
let parentheses = document.querySelectorAll('.parenthesis')
let clearButton = document.querySelector('.clear')
let equalButton = document.querySelector('.equal')

//Event Listeners
numberButton.forEach(button =>
    button.addEventListener('click', () => part1.value += button.innerText)
);

operatorButton.forEach(button => {
    button.addEventListener('click', () => part1.value += ` ${button.innerHTML} `);
});

// how do i make it do the flashing line thing as i type?
backspace.addEventListener('click', () => part1.value = part1.value.slice(0, part1.value.length - 1))

clearButton.addEventListener('click', () => part1.value = '')

parentheses.forEach(button => button.addEventListener('click', () => part1.value += button.innerText.toString()))

equalButton.addEventListener('click', () => part1.value = eval(part1.value))
