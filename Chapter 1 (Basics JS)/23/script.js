"use strict";

// This is nested loop

for (let i = 0; i < 3; i++) {
    console.log(i);
    for (let j = 0; j < 3; j++) {
        console.log(" " + j);
        for (let k = 0; k < 3; k++) {
            console.log("  " + k);
        }
    }
}

// *
// **
// ***
// ****
// *****

let result = "";
const length = 7;

for (let i = 0; i < length; i++) {
    for (let j = 0; j < i; j++) {
        result += "*";
    }

    result += "\n";
}

console.log(result);

// Labels for loop

general: for (let i = 0; i < 3; i++) {
    console.log(`First level: ${i}`);
    for (let j = 0; j < 3; j++) {
        console.log(` Second level: ${j}`);
        for (let k = 0; k < 5; k++) {
            if (k === 2) break general;
            console.log(`   Third level: ${k}`);
        } 
    }
}
