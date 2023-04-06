//Условия
"use strict";

const num = 50;

if (num < 49) {
    console.log("Num more than 50");
} else if (num >= 50) {
    console.log("Num less than 50")
} else {
    console.log(num);
}

//Тернарный (условный) оператор
//Тернарный - состоящий из трёх частей. ? после знака вопроса - если истинно, : после знака - если ложно 

const number = 50;
number === 50 ? console.log("Ok") : console.log("Error!");

//Switch
//Switch всегда проверяет на строгое соответствие (===)

const numSw = '50';

switch (numSw) {
    case '49':
        console.log("Не угадал");
        break;
    case '50':
        console.log("Да");
        break;
    default:
        console.log("Не в этот раз");
        break;        
}