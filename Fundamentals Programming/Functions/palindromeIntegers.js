function palindromeIntegers(array) {

    for (let number of array) {
        let reversed = reverseNumber(number);
        console.log(number === reversed);

    }

    function reverseNumber(number) {

        let reversedValue = "";

        while (number > 0) {
            let lastDigit = number % 10;
            reversedValue += lastDigit;
            number = parseInt(number / 10);
        }
        return Number(reversedValue);
    }
}


palindromeIntegers([123, 323, 421, 121])