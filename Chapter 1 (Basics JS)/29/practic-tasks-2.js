"use strict";

// Место для первой задачи
function getTimeFromMinutes(minutes) {
    if (Number.isInteger(minutes) && minutes >= 0 && minutes <= 600 && typeof(minutes) === "number") {
        const totalHours = Math.floor(minutes / 60);
        const totalMinutes = minutes % 60;
        if (totalHours === 1) return `Это ${totalHours} час и ${totalMinutes} минут`;
        if (totalHours >= 2 && totalHours <= 4) return `Это ${totalHours} часа и ${totalMinutes} минут`;
        if (totalHours === 0 || totalHours >= 5 && totalHours <= 10) return `Это ${totalHours} часов и ${totalMinutes} минут`;
    } else {
        return "Ошибка, проверьте данные";
    }
}

console.log(getTimeFromMinutes(500));

// Место для второй задачи
function findMaxNumber(a, b, c, d) {
    const arr = [a, b, c, d];
    let max = 0;
    if (typeof(a) === "number" && typeof(b) === "number" && typeof(c) === "number" && typeof(d) === "number") {
        for (let i = 0; i < arr.length; i++) {
            if (max < arr[i]) max = arr[i];
        } // Or Math.max(a, b, c, d)
        return max;
    } 

    return 0;
}

console.log(findMaxNumber(5, 4, 25, 99));