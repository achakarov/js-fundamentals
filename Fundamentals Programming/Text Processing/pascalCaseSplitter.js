function pascalCaseSplitter(text) {

    let indexesOfUpperCase = [];
    let characters = text.split("");
    for (let index in characters) {
        let currentChar = characters[index];
        let asciiValue = currentChar.charCodeAt(0);

        if (asciiValue >= 65 && asciiValue <= 90) {
            indexesOfUpperCase.push(Number(index));
        }
    }

    let words = [];

    for (let i = 0; i < indexesOfUpperCase.length; i++) {
        words.push(text.substring(indexesOfUpperCase[i], indexesOfUpperCase[i + 1]));
    }
    console.log(words.join(", "));
}

pascalCaseSplitter(
    'SplitMeIfYouCanHaHaYouCantOrYouCan'
)