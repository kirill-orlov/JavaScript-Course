/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

"use strict";

let numberOfFilms;

function start() {
    // isNaN() - если внутри не число, то он возвращает правду
    while(numberOfFilms == "" || numberOfFilms == undefined || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
    let i = 0;
    do {
        const a = prompt("Просмотренный фильм: ", "");
        const b = prompt("Оценка: ", "");
        if (a != null && b != null && a != "" && b != "" && a.length < 50 && b.length < 50) {
            personalMovieDB["movies"][a] = b;
            console.log("Success");
            i++;
        } else {
            console.log("Error");
            if (i <= 0) i--;
        }     
    } while (i < 2);
}

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        document.write("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
        document.write("Вы классический зритель");
    } else if (personalMovieDB.count > 30) {
        document.write("Вы киноман");
    } else {
        document.write("Произошла ошибка");
    }
}

detectPersonalLevel();

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`, "");
    }
}

writeYourGenres();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

