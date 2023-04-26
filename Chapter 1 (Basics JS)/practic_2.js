const restorantData = {
    menu: [
        {
            name: 'Salad Caesar',
            price: '14$'
        },
        {
            name: 'Pizza Diavola',
            price: '9$'
        },
        {
            name: 'Beefsteak',
            price: '17$'
        },
        {
            name: 'Napoleon',
            price: '7$'
        }
    ],
    waitors: [
        {name: 'Alice', age: 22}, {name: 'John', age: 24}
    ],
    averageLunchPrice: '20$',
    openNow: true
};

function isOpen(prop) {
    let answer = '';
    prop ? answer = 'Открыто' : answer = 'Закрыто';

    return answer;
}

console.log(isOpen(restorantData.openNow))

function isAverageLunchPriceTrue(fDish, sDish, average) {
    const sumInt = Number.parseFloat(fDish.price) + Number.parseFloat(sDish.price);
    const averageInt = Number.parseFloat(average);
    if (sumInt < averageInt) {
        return `Цена ниже средней`;
    } else if (sumInt === averageInt) {
        return `Цена равна средней`;
    } else {
        return 'Цена выше средней';
    }
}


console.log(isAverageLunchPriceTrue(restorantData.menu[0], restorantData.menu[1], restorantData.averageLunchPrice));

function transferWaitors(data) {
    const copy = {};
    for (let key in data) {
        let count = 0;
        if (data[key] instanceof Object) {
            copy[key] = [];
            for (let i of data[key]) {
                copy[key][count] = i;
                count++;
            }
            continue;
        }

        copy[key] = data[key];
    }
    copy.waitors[0] = {name: 'Mike', age: 32};
    // Как вариант, можно было бы просто изменить так:
    // copy.waitors = [{name: 'Mike', age: 32}];
    // Кстати, далее можно было бы деструктуризировать и вставить в строку выше ...destrcname
    return copy;
}

transferWaitors(restorantData);