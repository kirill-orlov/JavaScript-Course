"use strict";

function foo(a,b) {
  const [first, second] = a;
  const {eng} = b;

  return `${first} ${second} ${eng}`;
}

const result = foo(['Hello', 'Привет'], {ru: 'Мир', eng: 'World'})

console.log(result);


console.log(1 && 2);