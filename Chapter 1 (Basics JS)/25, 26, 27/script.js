// Функции - это наши оформленные действия в скриптах. Функцию особенно нужно создавать, если в последствии есть необходимость в нескольких её вызовах

// 25 
// Виды функций

// Первым делом браузер проходит по скрипту, по var и function declaration.

// Function Declaration (можем вызвать до объявления функции)
function ret() {
    let num = 50;

    return num;
} //не нужна ;

console.log(ret());

// Function Expression (можно вызвать только после объявления)

const logger = function() {
    console.log("Hello");
}; //нужна ; так как создаем переменную

logger();

// Стрелочная функция (Можно вызвать только после объявления)
// Особенности - данная функция не имеет контекста вызова (this)
const calc = (a, b) => a + b; // Если в одну строку - не надо {}

const calcTwo = c => {
    c = c**2;
    return c;
};

console.log(calcTwo(6));

// 26 - (DRY - Don't repeat yourself) важность универсальности и логичности, удобства параметров

const usdCurr = 28;
const eurCurr = 32;

// Функция должна быть универсальной и гибкой. Функция каждый раз будет выдавать результат на основании данных, которые в неё уже пришли 
function convert(amount, course) { //amount, course - это параметры
    console.log(course * amount);
}

convert(500, eurCurr); // В таких моментах раскрывается уникальность функции и польза параметра.
// 500, eurCurr - это аргументы

// 27 - ключевое слово return

const discount = 0.9;
const rubCurr = 28;

function convert2(amount, course) { //amount, course - это параметры
    return course * amount; // Результат работы функции
    console.log(); // Unreacheble (under return)
}

function promotion(result) {
    console.log(result * discount);
    
    return function() {}
}

const res = convert2(500, rubCurr);
promotion(res);

function test() {
    for (let i = 0; i < 5; i++) {
        console.log(i); 
        if (i === 3) return; // Прекращение работы функции досрочно
    } // данный return полностью заканчивает функцию. Возвращается undefined

    console.log('Done')
}

test();

// Любая функция что-то возвращает. Если не задан return, то функция вернет undefined по умолчанию

function doNothing() {};

console.log(doNothing() === undefined);

//Интересный момент (что вернет функция?):

function calculate(a, b) {
    return
}

function calcPlus(a) {
    console.log(calculate() * 600);
}

calcPlus(calculate()); // Что выведет функция?





// Ответ - NaN. Так как в функция calcPlus, пытается умножить undefined (полученный от calculate) на 600
// это некорректная математическая операция. А любая такая операция вернет NaN