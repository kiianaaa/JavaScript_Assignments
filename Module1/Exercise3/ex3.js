'use strict';

let num1 = parseInt(prompt('Please enter the first number'));
let num2 = parseInt(prompt('Please enter the second number'));
let num3 = parseInt(prompt('Please enter the third number'));

let sum = num1 + num2 + num3;
document.querySelector('.sum').innerHTML = (`The sum of these are: ${sum}`);

let pro = num1 * num2 * num3;
document.querySelector('.pro').innerHTML = (`The product of these are: ${pro}`);

let ave = sum / 3;
document.querySelector('.ave').innerHTML = (`The average of these are: ${ave}`);