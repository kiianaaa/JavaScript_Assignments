'use strict';

let name = prompt(`Give me your name child`);

let house = (Math.floor(Math.random() * 4) + 1); 

if (house == 1) {
    document.querySelector('.house').innerHTML = (`You are a Gryffindor ${name}!`);
}

if (house == 2) {
    document.querySelector('.house').innerHTML = (`You are a Hufflepuff ${name}!`);
}

if (house == 3) {
    document.querySelector('.house').innerHTML = (`You are a Ravenclaw ${name}!`);
}

if (house == 4) {
    document.querySelector('.house').innerHTML = (`You are a Ravenclaw ${name}!`);
}