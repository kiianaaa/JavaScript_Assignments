'use strict';

let name_new = prompt('Enter your name:');
document.querySelector(`.greet`).innerHTML = (`Hello, ${name_new}`);