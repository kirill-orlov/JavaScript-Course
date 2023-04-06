"use strict";

const arrObj = {
    a: 'a',
    abc: {
        viewForm: [
            50,
            100
        ],
        already: true
    }
}

console.log(arrObj['abc']['viewForm']['1']);

let answer = +prompt("Сколько вам лет?", "");
answer = answer + 5;

const answers = [];

// answers[0] = prompt('Как ваше имя?', '');
// answers[1] = prompt('Как ваша фамилия?', '');
// answers[2] = prompt('Сколько вам лет?', '');

console.log( typeof(answers) );

const category = 'toys'

console.log(`https://someurl.com/${category}/5`);

//Конкатенация числового типа к строковому
console.log(4 + ' hours ago')

// Унарный плюс
console.log(4 + +'5')
