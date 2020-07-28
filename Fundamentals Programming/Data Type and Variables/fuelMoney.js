function fuelMoney(distance, passengersNum, priceOfFuel) {

    let neededFuel = (distance / 100) * 7;

    neededFuel += passengersNum * 0.1;

    let neededMoney = neededFuel * priceOfFuel

    console.log(`Needed money for that trip is ${neededMoney}lv.`);

}

fuelMoney(260, 9, 2.49)