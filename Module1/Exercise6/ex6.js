'use strict';

const answer = confirm(`Should I calculate the square root?`);

if (answer === true) {
    const number = parseInt(prompt(`Give me a number then!`));
    let root = number **2;
    document.querySelector(`.root`).innerHTML = (`The square root of that number is: ${root}`);
        if (number < 0) {
            document.querySelector(`.root`).innerHTML = (`The square root of a negative number is not defined`);
        }
}
