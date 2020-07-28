function spiceMustFlow(startingYield) {

    let sumOfSpice = 0;
    let daysCount = 0;



    for (let currentYield = startingYield; currentYield >= 100; currentYield -= 10) {

        daysCount++;

        sumOfSpice += (currentYield - 26);

    }

    if (sumOfSpice > 26) {
        console.log(daysCount);
        console.log(sumOfSpice - 26);
    } else {
        console.log(daysCount);
        console.log(0);
    }

}

spiceMustFlow(5)