'use strict';

const year = parseInt(prompt(`Please enter the year you want to check:`))


if (year % 4 == 0 || year % 100 == 0 && year % 400) {
    document.querySelector(`.leap`).innerHTML = (`${year} is a leap year`);
}
else {
    document.querySelector(`.leap`).innerHTML = (`${year} is not a leap year`);
}