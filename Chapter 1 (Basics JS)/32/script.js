// JS это прототипно-ориентированный язык.
// В JS, все что существует, сводится к объектам. Например, метод var.toUpperCase() - исходит от большого встроенного объекта String. Объект String получает этот метод через цепочку прототипов.
// Мы можем сделать console.dir(String) и посмотреть, какие методы содержит в себе этот объект. И откуда эти методы приходят
"use strict";

const obj = new Object(); // То же самое что const obj {}

const options = {
    name: 'test', // Свойство. ключ: значение
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        background: 'red'
    },
    makeTest: function() {
        console.log("Test");
    } // Метод нашего объекта. Похожее на Object.keys (у нас options.makeTest). Только Object - встроенный объект, а options - наш рукотворно созданный
};

options.makeTest(); // Если ставятся (), значит метод/функция - вызывается.

//Деструктуризация объекта (Вытащить вложенные свойства из объекта)
const {border, bg} = options.colors;
console.log(border);

// console.log(options.colors.border);

// // Удаление свойства объекта, даже у константы (прямых констант в js - нет)
// delete options.name;
// console.log(options);

// Перебрать свойства объекта. Работает столько раз, сколько свойств в объекте
for (let key in options) {
    if (typeof(options[key]) === "object") {
        for (let i in options[key]) {
            console.log(`Свойство ${key} -> ${i} имеет значение ${options[key][i]}`);
        }
    } else {
        console.log(`Свойство ${key} имеет значение ${options[key]}`);
    }
}

// Неудобный вариант счетчика количества свойств у объекта
let counter = 0;
for (let keys in options) {
    counter++;
}

// Рациональный вариант, чтобы узнать количество свойств объекта
console.log(Object.keys(options).length); //Object.keys() возвращает массив из свойств указанного объекта. А к массивам и строкам применимо свойство .length