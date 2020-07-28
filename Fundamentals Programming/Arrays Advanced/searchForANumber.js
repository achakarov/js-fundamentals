function searchForANumber(array, searchedNumber) {

    let copy = array.slice();

    let firstNumber = searchedNumber[0];
    let deleteNumbers = searchedNumber[1];
    let findNumber = searchedNumber[2];

    let changedArray = copy.slice(0, firstNumber);
    let deletedArray = changedArray.splice(deleteNumbers);
    let count = 0;

    for (let i = 0; i < deletedArray.length; i++) {
        if (findNumber === deletedArray[i]) {
            count++;
        }
    }

    console.log(`Number ${findNumber} occurs ${count} times.`)
}

searchForANumber([5, 2, 3, 4, 1, 6],
    [5, 2, 3]
)