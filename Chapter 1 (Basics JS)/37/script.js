/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

"use strict";

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: true,
    getCount: function () {
        personalMovieDB.count = prompt("Сколько фильмов вы уже посмотрели?", "");
        while(personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
        }
    },
    getMovies: function () {
        for (let i = 0; i < 2; i++) {
            const a = prompt("Просмотренный фильм: ", "");
            const b = prompt("Оценка: ", "");
            if (a === null || b === null || a.trim().length === 0 || b.trim().length === 0) {
                i--;
                console.log("Error")
                continue;
            }
            personalMovieDB.movies[a.trim()] = b.trim();
            console.log("Success");
        }
    },
    getPersonalLevel: function () {
        if (personalMovieDB.count < 10) {
            document.write("Просмотрено довольно мало фильмов");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
            document.write("Вы классический зритель");
        } else if (personalMovieDB.count > 30) {
            document.write("Вы киноман");
        } else {
            document.write("Произошла ошибка");
        }
    },
    getYourGenres: function () {
        let genres = "";
        while (genres === null || genres.trim().length === 0) {
            genres = prompt(`Введите ваши любимые жанры через запятую:`, "");
        }
        personalMovieDB.genres = genres.split(", ");
        personalMovieDB.genres.sort();
        
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр #${i + 1} - это ${item}`);
        });
    },
    showMyDB: function(hidden) {
        if (hidden === false) console.log(personalMovieDB);
    },
    toggleVisibleMyDB: function() {
        (personalMovieDB.privat === false) ? personalMovieDB.privat = true : personalMovieDB.privat = false
    }
};
personalMovieDB.getCount();
personalMovieDB.getMovies();
personalMovieDB.getPersonalLevel();
personalMovieDB.getYourGenres();
personalMovieDB.toggleVisibleMyDB();
personalMovieDB.showMyDB(personalMovieDB.privat);
