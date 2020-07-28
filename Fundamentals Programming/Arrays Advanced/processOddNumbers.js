function processOddNumbers(numberArray) {

    let newArray = [];

    for (let i = 0; i < numberArray.length; i++) {

        if (i % 2 != 0) {
            newArray.push(numberArray[i] * 2);
        }
    }

    newArray.reverse();
    console.log(newArray.join(" "));
}

processOddNumbers([10, 15, 20, 25])