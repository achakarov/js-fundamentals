function oddAndEvenSum(number) {

    let oddSum = 0;
    let evenSum = 0;
    let numString = String(number)

    for (let i = 0; i < numString.length; i++) {

        let currentNum = number % 10;
        if (currentNum % 2 == 0) {
            evenSum += currentNum;
        } else {
            oddSum += currentNum;
        }

        number = Math.trunc(number / 10);
    }

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);

}

oddAndEvenSum(3495892137259234)