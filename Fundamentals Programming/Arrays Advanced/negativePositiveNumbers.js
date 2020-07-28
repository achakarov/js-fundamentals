function negativePositiveNumbers(numbers) {

    let newArray = [];

    while (numbers.length > 0) {
        let currentElement = numbers.shift();

        if (currentElement < 0) {
            newArray.unshift(currentElement);
        } else {
            newArray.push(currentElement);
        }
    }

    for (const number of newArray) {
        console.log(number);

    }
}

negativePositiveNumbers([7, -2, 8, 9])