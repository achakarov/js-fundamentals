function revealWords(words, sentence) {

    let wordArr = words.split(", ");
    let replacedSentence = "";


    for (let i = 0; i < wordArr.length; i++) {

        let currentWord = "*".repeat(wordArr[i].length);

        replacedSentence = sentence.replace(currentWord, wordArr[i]);
        sentence = replacedSentence;
    }

    console.log(replacedSentence)
}

revealWords(
    'great, learning',
    'softuni is ***** place for ******** new programming languages'
)