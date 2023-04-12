"use strict"

// Место для первой задачи
function calculateVolumeAndArea(length) {
    let cubeVolume;
    let cubeAllArea;
    if (Number.isInteger(length) && length > 0) {
        cubeVolume = length * length * length;
        cubeAllArea = 6 * (length * length);       
    } else {
        return "При вычислении произошла ошибка"
    }

    return `Объем куба: ${cubeVolume}, площадь всей поверхности: ${cubeAllArea}`
}

console.log(calculateVolumeAndArea(5));
console.log(calculateVolumeAndArea(15));
console.log(calculateVolumeAndArea(15.5));
console.log(calculateVolumeAndArea("15"));
console.log(calculateVolumeAndArea(-15));

// Место для второй задачи
function getCoupeNumber(ticketNumber) {
    if (Number.isInteger(ticketNumber) && ticketNumber >= 0) {
        if (ticketNumber >= 1 && ticketNumber <= 4) return 1;
        if (ticketNumber >= 5 && ticketNumber <= 8) return 2;
        if (ticketNumber >= 9 && ticketNumber <= 12) return 3;
        if (ticketNumber >= 13 && ticketNumber <= 16) return 4;
        if (ticketNumber >= 17 && ticketNumber <= 20) return 5;
        if (ticketNumber >= 21 && ticketNumber <= 24) return 6;
        if (ticketNumber >= 25 && ticketNumber <= 28) return 7;
        if (ticketNumber >= 29 && ticketNumber <= 32) return 8;
        if (ticketNumber >= 33 && ticketNumber <= 36) return 9;
        if (ticketNumber === 0 || ticketNumber > 36) return "Таких мест в вагоне не существует";
    } else {
        return "Ошибка. Проверьте правильность введенного номера места"
    }
}

console.log(getCoupeNumber(33));
console.log(getCoupeNumber(7));
console.log(getCoupeNumber(300));
console.log(getCoupeNumber(0));
console.log(getCoupeNumber(7.7));
console.log(getCoupeNumber(-10));
console.log(getCoupeNumber("Hello"));

// Интересная особенность, сначала у меня значение проваливалось в первый if (Number..) и оттуда, так как не находило удачного условия - выводило undefined.
// Починил, заработало.
// Еще можно было написать как Иван, return Math.ceil(ticketNumber / 4); Элегантно.