'use strict';

let name_new = window.prompt('Enter your name:');
document.querySelector(`.greet`).innerHTML = (`Hello, ${name_new}`);