'use strict';

let name = prompt(`Give me your name child`);

let house = (Math.floor(Math.random() * 4) + 1); 
console.log(house);

//if (house == 1) {
  //  document.querySelector('.house').innerHTML = (`You are a Gryffindor ${name}!`);
//}

//if (house == 2) {
  //  document.querySelector('.house').innerHTML = (`You are a Hufflepuff ${name}!`);
//}

//if (house == 3) {
  //  document.querySelector('.house').innerHTML = (`You are a Ravenclaw ${name}!`);
//}

//if (house == 4) {
  //  document.querySelector('.house').innerHTML = (`You are a Slytherin ${name}!`);
//}

switch(house) {
    case 1 :
        document.querySelector('.house').innerHTML = (`You are a Gryffindor ${name}!`);
        break;
    case 2:
        document.querySelector('.house').innerHTML = (`You are a Hufflepuff ${name}!`);
        break;
    case 3:
        document.querySelector('.house').innerHTML = (`You are a Ravenclaw ${name}!`);
        break;
    case 4:
        document.querySelector('.house').innerHTML = (`You are a Slytherin ${name}!`);
        break;
}