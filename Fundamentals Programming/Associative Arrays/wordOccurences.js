function wordOccurences(input) {

    let occurances = new Map();

    for (let word of input) {

        if (occurances.has(word)) {
            let oldQuantity = occurances.get(word);
            occurances.set(word, oldQuantity + 1);
        } else {
            occurances.set(word, 1);
        }
    }
    let sorted = Array.from(occurances).sort((a, b) => b[1] - a[1]);

    for (let line of sorted) {
        console.log(`${line[0]} -> ${line[1]} times`);
    }
}

wordOccurences(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"])