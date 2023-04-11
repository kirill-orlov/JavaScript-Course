"use strict";

// let num = 20; // Глобальная переменная

// //text - это параметр
// function showFirstMessage(text) {
//     let num = 30; //let,const существуют только внутри фигурных скобок (локальная переменная)
//     console.log(num); // Если бы строки выше не было, то функция бы сканирровала сначала уровень свой а потом шла на уровень выше
//     //Замыкания функции - это сама функция со всеми внешними переменными, которые ей доступны
//     return text;
// }

//Hello, World! - это аргумент
// console.log(showFirstMessage("Hello, World!"));
// console.log(num);


function calc(a, b) {
    return (a + b);
}

console.log(calc(4, 3));
console.log(calc(5, 6));
console.log(calc(10, 6));

function ret() {
    let num = 50;

    // code

    return num;
}

const anotherNum = ret();

console.log(anotherNum);

//Таблица функций