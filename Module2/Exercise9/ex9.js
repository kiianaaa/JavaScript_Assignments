'use strict';



const numbers = [7, 10, 15, 8, 13, 18, 6];

function even(numbers) {
    const evenNumb = [];
    for (let i = 0; i < numbers.length; i++) {
        const num = numbers[i];
        if (num % 2 === 0) {
            evenNumb.push(num);
        }
    }
    return evenNumb;
}


console.log(numbers);
console.log(even(numbers))