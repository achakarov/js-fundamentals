function sorting(array) {

    let copy = array.slice();

    let result = copy.sort((a, b) => b - a);

    let resultArray = [];

    for (let i = 0; i < array.length; i++) {
        if (i % 2 == 0 ) {
            resultArray.push(result.shift());
        } else {
            resultArray.push(result.pop());
        }
    }

    console.log(resultArray.join(" "));
}

sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])