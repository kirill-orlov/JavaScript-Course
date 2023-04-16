"use strict";

const family = ["Peter", "Ann", "Alex", "Linda"];

function showFamily(arr) {
    let str = "";
    arr.length === 0 ? str = "Семья пуста" : str = "Семья состоит из: ";

    arr.forEach(member => {
        str += `${member} `;
    });
    
    return str
}

const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
    arr.forEach(name => {
        console.log(name.toLowerCase());
    });
}
