function reverseAnArrayOfNumbers(number, array) {

    let string = ""

    for (let i = number - 1; i >= 0; i--) {
        string += array[i] + " ";
    }
    console.log(string);

}

reverseAnArrayOfNumbers(3, [10, 20, 30, 40, 50])