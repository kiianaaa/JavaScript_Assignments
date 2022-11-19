'use strict';

const yesr = parseInt(prompt(`Please enter the year you want to check:`))


if (year % 4 == 0 || year % 100 == 0 && year % 400) {
    document.querySelector
    (`${year} is a leap year`);
}
else {
    document.write(`${year} is not a leap year`);
}