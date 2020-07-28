function biscuitsFactory(input) {

    let totalBiscuits = 0;
    let biscuitsPerDay = Number(input.shift());
    let workersCount = Number(input.shift());
    let competition = Number(input.shift());

    for (let i = 0; i < 30; i++) {
        let currentDayProduction = 0;
        if (i % 3 === 0) {
            currentDayProduction = Math.floor((0.75 * biscuitsPerDay) * workersCount);
        } else {
            currentDayProduction = Math.floor(biscuitsPerDay * workersCount);
        }
        totalBiscuits += currentDayProduction;
    }

    console.log(`You have produced ${totalBiscuits} biscuits for the past month.`);
    let difference = Math.abs(totalBiscuits - competition);
    if (totalBiscuits > competition) {
        let percentage = ((difference / competition) * 100).toFixed(2);
        console.log(`You produce ${percentage} percent more biscuits.`);
    } else {
        let percentageTwo = ((difference / competition) * 100).toFixed(2);
        console.log(`You produce ${percentageTwo} percent less biscuits.`);
    }
}

biscuitsFactory(
    65,
    12,
    26000
)