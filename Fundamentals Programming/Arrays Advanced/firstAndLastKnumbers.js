function firstAndLastKnumbers(array) {

    let k = array.shift();

    let firstKNumbers = array.slice(0, k);
    let lastKNumbers = array.slice(array.length - k);

    let firstResult = "";
    let lastResult = "";

    for (let i = 0; i < k; i++) {
        firstResult += ` ${firstKNumbers[i]}`;
        lastResult += ` ${lastKNumbers[i]}`;
    }

    console.log(firstResult);
    console.log(lastResult);


}

firstAndLastKnumbers([2,
    7, 8, 9]
)