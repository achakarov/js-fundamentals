function aMinerTask(input) {

    let storage = new Map();
    for (let i = 0; i < input.length; i++) {

        if (i % 2 === 0) {
            let currentItem = input[i];
            let currentAmount = Number(input[i + 1]);

            if (storage.has(currentItem)) {
                let oldQuantity = storage.get(currentItem);
                storage.set(currentItem, oldQuantity + currentAmount)
            } else {
                storage.set(currentItem, currentAmount);
            }
        }
    }

    for (let kvp of storage.entries()) {
        console.log(`${kvp[0]} -> ${kvp[1]}`);
    }
}

aMinerTask(
    [
        'gold',
        '155',
        'silver',
        '10',
        'copper',
        '17',
        'gold',
        '15'
    ]

)