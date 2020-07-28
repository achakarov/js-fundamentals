function counterStrike(input) {

    let energy = Number(input.shift());
    let winsCount = 0;
    let energyNeeded = Number(input.shift());
    let isAlive = true; 

    while (energyNeeded !== "End of battle") {
        energyNeeded = Number(energyNeeded); 

        if (energy - energyNeeded < 0) {
           console.log( `Not enough energy! Game ends with ${winsCount} won battles and ${energy} energy`);
           isAlive = false; 
           break; 
        } else {
            energy -= energyNeeded;
            winsCount++
        }

        if (winsCount % 3 === 0) {
            energy += winsCount; 
        }

        energyNeeded = input.shift(); 
    }

    if (isAlive) {
        console.log(`Won battles: ${winsCount}. Energy left: ${energy}`); 
    }
}

counterStrike(
    [
        '100', '10', '10',
        '10', '1', '2',
        '3', '73', '10'
    ]
)