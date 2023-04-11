/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами */

"use strict";

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

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

if (personalMovieDB.count < 10) {
    document.write("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
    document.write("Вы классический зритель");
} else if (personalMovieDB.count > 30) {
    document.write("Вы киноман");
} else {
    document.write("Произошла ошибка");
}

console.log(personalMovieDB);