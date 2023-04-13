// Методы и свойства строк и чисел

// Методы учить бесполезно. Нужно их применять на практике, обращаться к документации. И только таким образом они запомнятся
// Методы пишутся с круглыми скобками, а свойства - без. Потому что методы что-то делают со строкой
// console.dir(Number) - выведет всю информацию о примитиве Number

"use strict";

// Строки

const str = "tesT";
const arr = [1, 2, 4];

// console.log(str[2] = 'd');

// console.log(str.toUpperCase()); // Метод toUpperCase.
console.log(str.toLowerCase());
console.log(str);

const fruit = "Some fruit";

console.log(fruit.indexOf("q")); // Поиск подстроки

const logg = "Hello world";

console.log(logg.slice(6, 11)); // Вырезать кусок строки slice(нач, конец) или просто slice(6), или slice(-6, - 1)

console.log(logg.substring(6, 11)); // То же самое что slice, только не поддерживает отрицательные значения

console.log(logg.substr(6, 5)); // Вырезать кусок строки. substr(нач, длина)

// Числа

// Math - встроенная библиотека свойств и методов для чисел
const num = 12.2;
console.log(Math.round(num)); // Округление

const test = "12.2px";
console.log(); // Переводит строку в другую систему исчисления. В нашем случае 12.2px, по умолчанию перевелось в целочисленную 10-тичную
console.log(Number.parseFloat(test)); // Переводит строку в десятичное число. В нашем случае 12.2px, по умолчанию перевелось в число с плавающей точкой
