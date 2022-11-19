'use strict';

const numb = parseInt(prompt(`Enter the number you want to check:`));

if (numb === 1) {
    document.querySelector(`.prime`).innerHTML = (`It seems like 1 should be prime, bit it's not`);
}
else if (numb === 0) {
    document.querySelector(`.prime`).innerHTML = (`Zero is neither prime nor composite`);
}
else if (numb === 2) {
    document.querySelector(`.prime`).innerHTML = (`2 is interesting because it is the only even prime number!`);
}
else {
    let isPrime = true;
    for (let i = 3; i <= Math.ceil(Math.sqrt(numb)); i++) {
        if (numb % i === 0) {
            isPrime = false;
        }
        if (isPrime === false) {
            document.querySelector(`.prime`).innerHTML = (`${numb} is not a prime number`);
        }
    }

    if (isPrime === true) {
        document.querySelector(`.prime`).innerHTML = (`${numb} is a prime number`);
    }
}
