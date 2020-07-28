function replaceRepeatingChars(text) {
    let arr = [];

    for (let i = 0; i < text.length; i++) {
        let currentChar = text[i];
        if (currentChar !== text[i - 1]) {
            arr.push(currentChar);
        }
    }
    console.log(arr.join(""));
}

replaceRepeatingChars(
    'aaaaabbbbbcdddeeeedssaa'
)