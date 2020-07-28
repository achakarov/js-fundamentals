function weaponsmith(arr) {

    let array = arr.slice();

    let weapon = array.shift().split("|");

    let command = array.shift();
    while (command !== "Done") {

        let currentLine = command.split(" ");
        if (currentLine[1] === "Right") {
            let indexRight = Number(currentLine[2]);
            if (indexRight >= 0 && indexRight < weapon.length - 1) {

                [weapon[indexRight + 1], weapon[indexRight]] = [weapon[indexRight], weapon[indexRight + 1]];

            }

        } else if (currentLine[1] === "Left") {
            let indexLeft = Number(currentLine[2]);
            if (indexLeft > 0 && indexLeft < weapon.length) {

                [weapon[indexLeft - 1], weapon[indexLeft]] = [weapon[indexLeft], weapon[indexLeft - 1]];

            }

        } else if (currentLine[1] === "Even") {
            let output = "";
            for (let i = 0; i < weapon.length; i++) {
                if (i % 2 === 0) {
                    output += weapon[i] + " ";
                }
            }
            console.log(output);

        } else if (currentLine[1] === "Odd") {
            let outputOdd = "";
            for (let i = 0; i < weapon.length; i++) {
                if (i % 2 !== 0) {
                    outputOdd += weapon[i] + " ";
                }
            } console.log(outputOdd);
        }

        command = array.shift();
    }

    let result = weapon.join("");
    console.log(`You crafted ${result}!`)
}

weaponsmith(
    [
        'ha|Do|mm|om|er',
        'Move Right 0',
        'Move Left 3',
        'Check Odd',
        'Move Left 2',
        'Move Left 10',
        'Move Left 0',
        'Done'
    ]
)