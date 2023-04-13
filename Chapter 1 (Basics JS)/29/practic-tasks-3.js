"use strict";

function fib(length) {
    // Практика будет лучше, если откидывать неподходящие значения вначале:
    // if (typeof(num) !== 'number' || num <= 0 || !Number.isInteger(num)) {
    //     return "";
    // }

    let result = "";
    let arr = [];
    if (Number.isInteger(length) && length > 0) {
        for(let i = 0; i < length; i++) {
            if (i >= 2) arr[i] = arr[i - 1] + arr[i - 2];
            if (i < 2) arr[i] = i;
            (i === length - 1) ? result += `${arr[i]}` : result += `${arr[i]} `;
        }
        return result;
    }
    return "";
}


console.log(fib(10));

// Вариант Ивана (эффективнее и проще)

// function fib(num) {
//     if (typeof(num) !== 'number' || num <= 0 || !Number.isInteger(num)) {
//         return "";
//     }

//     let result = '';
//     let first = 0;
//     let second = 1;

//     for (let i = 0; i < num; i++) {
//         if (i + 1 === num) {
//             result += `${first}`;
//             // Без пробела в конце
//         } else {
//             result += `${first} `;
//         }

//         let third = first + second;
//         first = second;
//         second = third;
//     }

//     return result;
// }

// fib(5)