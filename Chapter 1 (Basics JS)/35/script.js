"use strict";

// В примитивах происходит передача по значению
// let a = 5,
//     b = a;

// b = b + 5;

// console.log(b);
// console.log(a);

// // В объектах происходит передача по ссылке
// const obj = {
//     a: 5,
//     b: 1
// };

// const copy = obj; // Это ссылка на объект obj {}, а не его копия. Переменная copy ссылается на объект obj {}
// copy.a = 10;

// console.log(copy);
// console.log(obj);

// Копирование объекта
function copy(mainObj) {
    let objCopy = {};
    
    for (let key in mainObj) {
        objCopy[key] = mainObj[key];
    }

    return objCopy;
}

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};

const newNumbers = copy(numbers);

newNumbers.a = 10;
newNumbers.c.x = 10;

console.log(newNumbers);
console.log(numbers);

// Когда мы так кланируем объекты - есть 2 важных понятия - поверхностная и глубокая копия. Выше мы используем поверхностную. Как только цикл доходит до вложенных объектов в объект - он делает ссылку, а не копию

const add = {
    d: 17,
    e: 20
}

// console.log(Object.assign(numbers, add)); // Слияние объектов add в numbers (получилась реальная, не ссылочная копия add {} в -> numbers {})

// Используя этот метод, мы также можем создать просто копию объекта!!

const clone = Object.assign({}, add);

clone.d = 20;
console.log(add);
console.log(clone);

// Создание копии массива
const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice(); // Сделать копию массива

newArray[1] = 'asdasd';
console.log(oldArray);
console.log(newArray);

// Оператор разворота (Spread оператор) - он разворачивает (обнажает) данные массива/объекта.
// С массивами
const video = ['youtube', 'vimeo', 'rutube'],
      blogs = ['wordpress', 'livejournal', 'blogger'],
      internet = [...video, ...blogs, 'vk', 'facebook'];

console.log(internet);

function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2, 5, 7];

log(...num); // Вставка массива в функцию

// С объектами

const array = ["a", "b"];

const newAarray = [...array]; // Копия массива

const q = {
    one: 1,
    two: 2
};

const newObj = {...q}; // Копия объекта

newObj.one = "first";
console.log(q);
console.log(newObj);