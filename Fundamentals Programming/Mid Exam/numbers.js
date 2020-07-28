function numbers(input) {

    let array = input.split(" ").map(x => Number(x));

    let finalArray = [];

    let total = 0;

    for (let i = 0; i < array.length; i++) {
        total += array[i];
    }

    let average = total / array.length;

    array.sort((a, b) => b - a);

    for (let j = 0; j < array.length; j++) {

        if (array[j] > average && finalArray.length < 5) {
            finalArray.push(array[j]);
        }

    }
    if (finalArray.length > 0) {
        console.log(finalArray.join(" "));
    } else {
        console.log("No");
    }

}

numbers('5 2 3 4 -10 30 40 50 20 50 60 60 51')