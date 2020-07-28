function countStringOccurences(text, word) {

    let count = 0; 
    let result = text.split(" "); 
    for (const occurence of result) {
        if (occurence === word) {
            count++; 
        }
    }

    console.log(count); 
}

countStringOccurences("This is a word and it also is a sentence",
"is"
)