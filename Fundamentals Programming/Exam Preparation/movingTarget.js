function movingTarget(input) {

    let array = input.slice();
    let targets = array.shift().split(" ").map(x => Number(x));

    let line = array.shift();

    while (line !== "End") {

        let [command, index, value] = line.split(" ");
        index = Number(index);
        value = Number(value);

        switch (command) {
            case "Shoot":
                if (index >= 0 && index < targets.length) {
                    targets[index] -= value;

                    if (targets[index] <= 0) {
                        targets.splice(index, 1);
                    }
                }
                break;

            case "Strike":
                let start = index - value;
                let end = index + value;

                if (start >= 0 && end < targets.length - 1) {
                    let difference = (end - start) + 1;
                    targets.splice(start, difference);
                } else {
                    console.log("Strike missed!");
                }
                break;

            case "Add":
                if (index >= 0 & index < targets.length) {
                    targets.splice(index, 0, value);
                } else {
                    console.log("Invalid placement!");
                }
                break;
        }


        line = array.shift();
    }
    let result = targets.join("|");
    console.log(result);

}

movingTarget(
    [
        '47 55 85 78 99 20',
        'Shoot 1 55',
        'Shoot 8 15',
        'Strike 2 3',
        'Add 0 22',
        'Add 2 40',
        'Add 2 50',
        'End'
    ]
)