// Задачи:

// При помощи цикла выведите числа от 5 до 10 в консоль. 5 и 10 включительно. Цикл можно использовать любой

// При помощи цикла for вывести числа от 20 до 10 в консоль. В обратном порядке (20, 19, 18...). Когда цикл дойдет до числа 13 - остановить весь цикл

// При помощи цикла for выведите чётные числа от 2 до 10 включительно

// Перепишите цикл  for на вариант с while. Результат должен остаться точно таким же. Не создайте бесконечный цикл! Иначе браузер может зависнуть.

//  Цикл, который нужно переписать:

//  for (let i = 2; i <= 16; i++) {
//      if (i % 2 === 0) {
//          continue;
//      } else {
//          console.log(i);
//      }
//  }
// Заполните массив цифрами от 5 до 10 включительно. Помните, что элементы массива можно сформировать так же, как и обращаться к ним: arr[0]

"use strict";

function firstTask() {
    for (let i = 5; i <= 10; i++) {
        console.log(i);
    }
}

function secondTask() {
    for (let i = 20; i >= 10; i--) {
        if (i === 13) break;
        console.log(i);
    }
}

function thirdTask() {
    for (let i = 2; i <= 10; i++) {
        if (i % 2 === 0) console.log(i);
    }
}

function fourthTask() {
    let min = 2;
    let max = 16;
    while (min <= max) {
        if (min % 2 === 0) {
            min++;
            continue;
        } else {
            console.log(min);
            min++;
        }
    }
}

function fifthTask() {
    const arr = [];

    for (let i = 5; i <= 10; i++) {
        arr[i - 5] = i;
    }

    console.log(arr);
}

// Задачи:

// Заполните новый массив (result) числами из старого (arr). Количество элементов в массиве можно получить как arr.length, а к элементам обращаемся все так же: arr[0], arr[1] и тд.
// Должен получиться точно такой же массив

// Измените данный массив так, чтобы все числа были увеличены в 2 раза, а если попадается строка строка - то к ней было добавлено " - done".
// Для определения типа данных используйте typeof();
// Должно получиться: [ 10, 20, 'Shopping - done', 40, 'Homework - done' ]

// Разверните массив data наоборот при помощи цикла и запишите данные в массив result.
// Должно получиться: [ 'Homework', 20, 'Shopping', 10, 5 ]

function firstTask() {
    const arr = [5, 2, 6, 8, 10];
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result[i] = arr[i];
    }

    return result;
}

console.log(firstTask());

function secondTask() {
    const arr = [5, 10, "Shopping", 40, "Homework"];
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        if (typeof (arr[i]) === "number") {
            result[i] = arr[i] * 2;
        } else if (typeof (arr[i]) === "string") {
            result[i] = arr[i];
            result[i] += " - done"
        }
    }

    return result;
}

console.log(secondTask());

function thirdTask() {
    const arr = [5, 10, "Shopping", 40, "Homework"];
    let result = [];

    for (let i = 1; i <= arr.length; i++) {
        result[i - 1] = arr[arr.length - i];
    }

    return result;
}

console.log(thirdTask());

// Это одна из классических задач в программировании на формирование самых разных фигур при помощи кода. Вы спросите, а зачем это вообще нужно? Ответов несколько:

// Существуют реальные задачи, когда вы кодом строите геометрию, символы и другие нужные вещи. Вспомните простые электронные табло на улицах, например

// Это хорошо прокачивает логику и разминает мозг

// Позволяет запомнить нюансы работы языка

// Иногда можно встретить просто нереальные вещи, построенные только при помощи кода. Но мы с вами займемся базовой фигурой. Сейчас вам необходимо написать код, который при помощи звездочек (*) в консоли нарисует вот такую фигуру:

//      *
//     ***
//    *****
//   *******
//  *********
// ***********
// (Подсказка: в конце фигуры есть перенос строки \n, который тоже учитывается в тестах. В КОНЦЕ КАЖДОЙ СТРОКИ НЕТ ПРОБЕЛОВ, ТОЛЬКО ПЕРЕНОС)

let result = "";
const treeHeight = 6;

for (let i = 1; i <= treeHeight; i++) {
    for (let j = treeHeight; j >= i; j--) {
        result += " ";
    }
    for (let k = 1; k <= i; k++) {
        if (k === 1) {
            result += "*";
            continue;
        }
        result += "**";
    }
    result += "\n";
}

console.log(tree());