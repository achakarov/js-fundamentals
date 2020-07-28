function wizardPoker(arr) {

    let array = arr.slice();
    let cardsDeck = array.shift().split(":");
    let newDeck = [];

    let line = array.shift();
    while (line !== "Ready") {
        let [command, card, index] = line.split(" ");

        switch (command) {
            case "Add":
                if (cardsDeck.includes(card)) {
                    newDeck.push(card);
                } else {
                    console.log("Card not found.");
                }
                break;

            case "Insert":
                index = Number(index);
                if (cardsDeck.includes(card) && index >= 0 && index < newDeck.length) {
                    newDeck.splice(index, 0, card);
                } else {
                    console.log("Error!");
                }
                break;

            case "Remove":

                if (newDeck.includes(card)) {
                    let indexCard = newDeck.indexOf(card);
                    newDeck.splice(indexCard, 1);
                } else {
                    console.log("Card not found.")
                }
                break;

            case "Swap":
                let indexCardOne = newDeck.indexOf(card);
                let indexCardTwo = newDeck.indexOf(index);
                [newDeck[indexCardOne], newDeck[indexCardTwo]] = [newDeck[indexCardTwo], newDeck[indexCardOne]];
                break;

            case "Shuffle":
                newDeck.reverse();
                break;

        }
        line = array.shift();
    }

    console.log(newDeck.join(" "));
}

wizardPoker(
    [
        'Wrath:Pounce:Lifeweaver:Exodia:Aso:Pop',
        'Add Pop',
        'Add Exodia',
        'Add Aso',
        'Remove Wrath',
        'Add SineokBqlDrakon',
        'Shuffle deck',
        'Insert Pesho 0',
        'Ready'
    ]

)