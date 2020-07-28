function arrayModifier(input) {

    let array = input.shift().split(" ").map(x => Number(x));

    let line = input.shift();

    while (line !== "end") {
        let [command, indexOne, indexTwo] = line.split(" ");
        indexOne = Number(indexOne);
        indexTwo = Number(indexTwo);

        switch (command) {

            case "swap":
                [array[indexOne], array[indexTwo]] = [array[indexTwo], array[indexOne]]; 
                break;

            case "multiply":
                let result = array[indexOne] * array[indexTwo]; 
                array[indexOne] = result;
                break;

            case "decrease":
           for (let i = 0; i < array.length; i++) {
               array[i] = array[i] - 1; 
           }
                break;
        }

        line = input.shift();
    }

    console.log(array.join(", ")); 
}

arrayModifier(
    [
        '23 -2 321 87 42 90 -123',
        'swap 1 3',
        'swap 3 6',
        'swap 1 0',
        'multiply 1 2',
        'multiply 2 1',
        'decrease',
        'end'
    ]
)