"use strict";
const shoppingMallData = {
    shops: [
        {
            width: 10,
            length: 5
        },
        {
            width: 15,
            length: 7
        },
        {
            width: 20,
            length: 5
        },
        {
            width: 8,
            length: 10
        }
    ],
    height: 5,
    moneyPer1m3: 30,
    budget: 50000
}

function isBudgetEnough(data) {
    let allSquare = 0;
    let allVolume = 0;

    data.shops.forEach(shopObj => {
        let shopSquare = shopObj.width*shopObj.length;
        allSquare = shopSquare + allSquare;
    });

    allVolume = allSquare*data.height;
    let allCost = allVolume*data.moneyPer1m3;

    if(allCost <= data.budget) {
        return `Бюджета достаточно`
    }  else {
        return `Бюджета недостаточно`
    }
}