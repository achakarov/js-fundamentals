function modernTimesOfHashTag(sentence) {

    let words = sentence.split(" ")
    let wordsWithHashTag = words.filter((word) => word.startsWith("#") && word.length > 1);
    let validWords = wordsWithHashTag.filter((word) => {

        let characters = word.split("").slice(1)

        return(characters.every((x) => isLower(x) || isUpper(x)))
    });

    validWords.forEach((word) => console.log(word.substring(1))); 

    function isLower(char) {
        let asciiValue = char.charCodeAt(0);
        return asciiValue >= 97 && asciiValue <= 122;
    }

    function isUpper(char) {
        let asciiValue = char.charCodeAt(0);
        return asciiValue >= 65 && asciiValue <= 90;
    }

}

modernTimesOfHashTag(
    'Nowadays everyone uses # to tag a #special word in #socialMedia'
)