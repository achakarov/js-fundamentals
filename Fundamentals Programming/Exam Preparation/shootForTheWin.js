function shootForTheWin(input) {

    let targets = input.shift().split(" ").map(x => Number(x));
    let countShotTargets = 0; 

    let shootTargetIndex = input.shift();

    while (shootTargetIndex !== "End") {
        shootTargetIndex = Number(shootTargetIndex);

        if (shootTargetIndex >= 0 && shootTargetIndex < targets.length && targets[shootTargetIndex] !== -1) {
           

            for (let i = 0; i < targets.length; i++) {
                if (targets[i] !== - 1 && i !== shootTargetIndex && targets[i] > targets[shootTargetIndex]) {
                    targets[i] -= targets[shootTargetIndex]; 
                } else if (targets[i] !== -1 && i !== shootTargetIndex && targets[i] <= targets[shootTargetIndex]) {
                    targets[i] += targets[shootTargetIndex]; 
                }
            }

            targets[shootTargetIndex] = -1;
            countShotTargets++
        }

        shootTargetIndex = input.shift();
    }

    let result = targets.join(" "); 

    console.log(`Shot targets: ${countShotTargets} -> ${result}`); 

}

shootForTheWin(
    [ '30 30 12 60 54 66', '5', '2', '4', '0', 'End' ]
)