function pyramidOfKingJoris(base, increment) {

    let totalStone = 0;
    let totalMarble = 0;
    let totalLapis = 0;
    let totalGold = 0;
    let isFinal = false;
    let currentFloor = 1;



    for (let i = base; i > 0; i -= 2) {
        let currentTotal = Math.pow(i, 2);

        if ((i - 2) <= 0) {
            let currentGold = Math.pow(i, 2);
            let neededGold = currentGold * increment;
            totalGold += neededGold;
            isFinal = true;

            break;
        } else {


            if (currentFloor % 5 != 0) {
                let currentStone = Math.pow(i - 2, 2);
                let currentMarble = (i * 4) - 4;
                let neededStone = currentStone * increment;
                let neededMarble = currentMarble * increment;
                totalStone += neededStone;
                totalMarble += neededMarble
            } else {
                let currentStone = Math.pow(i - 2, 2);
                let currentLapis = (i * 4) - 4;
                let neededStone = currentStone * increment;
                let neededLapis = currentLapis * increment;
                totalStone += neededStone;
                totalLapis += neededLapis
            }


            currentFloor++;
        }

    }

    let totalFloors = Math.floor(currentFloor * increment);

    console.log(`Stone required: ${Math.ceil(totalStone)}`);
    console.log(`Marble required: ${Math.ceil(totalMarble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(totalLapis)}`);
    console.log(`Gold required: ${Math.ceil(totalGold)}`);
    console.log(`Final pyramid height: ${totalFloors}`);



}

pyramidOfKingJoris(11,
    0.75


)