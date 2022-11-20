'use strict';

let numbers = [];
let numb = 1

for (let i = 0; numb > 0; i++) {
    numb = parseInt(prompt("Enter a number until u dont whant to, then enter zero:"));
    numbers.push(numb);
}

numbers.sort(function (a, b) { return b - a; });
console.log(numbers);