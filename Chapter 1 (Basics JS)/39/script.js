"use strict";

/* Примеры использования динамической типизации. В JS, переменные и другие типы данных - могут менять свой тип данных */

// To String (устаревшее)

// 1)
console.log(typeof(String(null)));
console.log(typeof(String(4)));

// Конкатенация (при сложении со строкой, всегда получается строка)
// 2)
console.log(typeof(5 + ''));

const num = 5;
console.log("https://vk.com/catalog/" + num);

const fontSize = 26 + "px";

// To Number

// 1)
console.log(typeof(Number("4")));

// Унарный плюс
// 2)
console.log(typeof(+"5"));

// 3)
console.log(typeof(parseInt("15px", 10)));

let answer = +prompt("Hello", "");

// Все что мы получаем от пользователя - всегда строки String. И иногда, нам нужно будет преобразовывать эти строки в другой тип данных

// To Boolean

// Всегда false
// 0, '', null, undefined, NaN;
// Остальное - все true

// 1)
let switcher = null;

if (switcher) {
    console.log("Working...");
}

switcher = 1;

if (switcher) {
    console.log("Working...");
}

// 2)

console.log(typeof(Boolean(4)));

// 3)
console.log(typeof(!!"44444"));