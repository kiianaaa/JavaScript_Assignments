'use strict';

const num1 = parseInt(prompt(`Pleae enter the first number:`));
const num2 = parseInt(prompt(`Pleae enter the second number:`));
const num3 = parseInt(prompt(`Pleae enter the third number:`));
const num4 = parseInt(prompt(`Pleae enter the forth number:`));
const num5 = parseInt(prompt(`Pleae enter the fifth number:`));

let numList = [];
numList.push(num1);
numList.push(num2);
numList.push(num3);
numList.push(num4);
numList.push(num5);

for (let index = numList.length - 1; index >= 0; index--) {
    const element = numList[index];
    console.log(element);
  }