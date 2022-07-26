let part1 = document.querySelector('.part1')
let part2 = document.querySelector('.part2')
let operatorField = document.querySelector('.operatorField')
let numberButton = document.querySelectorAll('.num')
let operatorButton = document.querySelectorAll('.operators')
let clearButton = document.querySelector('.clear')
let equalButton = document.querySelector('.equal')

//Event Listeners
numberButton.forEach(button => {
    button.addEventListener('click', () => {
        if (!operatorField.value) {
            part1.value += button.innerText
            return;
        }
        part2.value += button.innerText
    });
});

operatorButton.forEach(button => {
    button.addEventListener('click', () => operatorField.value = button.innerHTML);
});

clearButton.addEventListener('click', () => {
    part1.value = '';
    operatorField.value = '';
    part2.value = '';
})


equalButton.addEventListener('click', () => calculate(part1, operatorField, part2))

// idk how this will go
function calculate(top, operator, bottom) {
    inputValue = `${top.value} ${operator.value} ${bottom.value}`
    console.log(eval(inputValue))
}

