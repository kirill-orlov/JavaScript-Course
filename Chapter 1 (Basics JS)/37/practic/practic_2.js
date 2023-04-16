"use strict";
const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi'];

function sortStudentsByGroups(arr) {
    arr.sort();
    let group_1 = [];
    let group_2 = [];
    let group_3 = [];
    let str = `Оставшиеся студенты: `;

    if (arr.length === 9) str += `-`;

    arr.forEach((item, i) => {
        if (i < 3) {
            group_1 = arr.slice(0, 3)
        } else if (i >= 3 && i <= 5) {
            group_2 = arr.slice(3, 6)
        } else if (i >= 6 && i <= 8) {
            group_3 = arr.slice(6, 9)
        } else if (i > 8 && i + 1 === arr.length) {
            str += `${item}`;
        } else {
            str += `${item}, `;
        }
    });

    let resultGroups = [group_1, group_2, group_3, str];
    return resultGroups;
}