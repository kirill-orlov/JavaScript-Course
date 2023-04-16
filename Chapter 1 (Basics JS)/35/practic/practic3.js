"use strict";

const someString = 'This is some strange string';

function reverse(str) {
    if (typeof(str) !== "string") return "Ошибка!"

    // Method 1 - for()
    // let newStr = "";
    // for (let i = 0; i <= str.length; i++) {
    //     newStr += str[str.length-i];
    // }

    // Method 2 - Arrays
    // let newStr = "";
    // let arrayOfSymbols = [];
    // let i = 1;
    // for (let symbol of str) {
    //     arrayOfSymbols[str.length-i] = symbol;
    //     i++;
    // }

    // arrayOfSymbols.forEach(symbol => {
    //     newStr += `${symbol}`;
    // });

    //Method 3 - Array with Reverse
    let newStr = "";
    let arrayOfSymbols = [];
    let i = 1;
    for (let symbol of str) {
        arrayOfSymbols[i] = symbol;
        i++;
    }
    arrayOfSymbols = arrayOfSymbols.reverse();
    arrayOfSymbols.forEach(symbol => {
        newStr += symbol;
    });

    return newStr
}

const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {
    let str = "";
    arr.length === 0 ? str = "Нет доступных валют" : str = "Доступные валюты:\n"

    arr.forEach((nameCurr, currId) => {
        if (nameCurr === missingCurr) {
            delete arr[currId];
        } else {
            str += `${nameCurr}\n`;  
        }
    });

    return str
}

console.log(availableCurr([...baseCurrencies, ...additionalCurrencies], 'RUB'));