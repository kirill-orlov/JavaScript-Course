// const hamburger = true;
// const fries = false;

// if (hamburger && fries) {
//     console.log("Я сыт!");
// }

// console.log((hamburger && fries));

// const hamburger = 3;
// const fries = 6;
// const cola = 5;

// if (hamburger === 3 && cola && fries) {
//     console.log("Все сыты!");
// } else {
//     console.log("Мы уходим :[");
// }

// console.log(hamburger === 3 && cola && fries);

// console.log(1 && 0); //0
// console.log(1 && 5); // 5
// console.log(null && 5); // null
// console.log(0 && 'sdfjghkl;adjf;'); // 0

const hamburger = 3;
const fries = 3;
const cola = 0;
const nuggets = 3;

if (hamburger === 3 && cola === 2 || fries === 3 && nuggets) {
    console.log("Все довольны!");
} else {
    console.log("Мы уходим :[");
}

console.log(nuggets && (hamburger === 3 && cola === 2 || fries === 3));

//Ключ - это подстановка через переменную nuggets. тАм где nuggets - будет просто двойка, а не проверка ===, чтобы выводить true или false!
//Разбирать условие поэтапно, поприоритетно.

let johnReport, AlexReport, samReport, mariaReport = 'done';

console.log(johnReport || AlexReport || samReport || mariaReport);