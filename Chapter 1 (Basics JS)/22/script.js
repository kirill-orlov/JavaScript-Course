"use strict";

let num = 50;
//Пока условие выполняется, мы будем делать следующие действия:
while (num <= 55) {
    console.log(num);
    num++;
}

do {
    console.log(num);
    num++;
} while (num < 60);

//i - сокращённо итератор
// 1 аргумент - переменная, условие для остановки, и шаг цикла
for (let i = 1; i < 55; i++) {
    // Тело цикла
    if (i === 6) {
        continue;
    }

    console.log(i);
}

//break - ключевое слово для остановки цикла. Прерывает цикл полностью
//continue - помогает пропустить какой-либо шаг, не прерывая полностью цикл