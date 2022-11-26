'use strict';


let array = [`pat`, `pran`, `tharn`, `type`];
let result = '';


function concat(array) {
    for (let i = 0; i < array.length; i++)
        result = result.concat(array[i]);
    return result;
}


document.querySelector(`.list`).innerHTML = concat(array);