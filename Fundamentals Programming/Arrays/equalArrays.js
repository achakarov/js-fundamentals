function equalArrays(numbersOne, numbersTwo) {

    let resultOne = "";
    let resultTwo = "";
    let sumNumOne = 0;
    let sumNumTwo = 0;

    for (const numOne of numbersOne) {

        resultOne += numOne;
        let currentNumOne = Number(numOne);
        sumNumOne += currentNumOne;
    }

    for (const numTwo of numbersTwo) {
        resultTwo += numTwo;
        let currentNumTwo = Number(numTwo);
        sumNumTwo += currentNumTwo;
    }


    if (resultOne === resultTwo) {
        console.log(`Arrays are identical. Sum: ${sumNumOne}`);

    } else {


        if (numbersOne.length >= numbersTwo.length) {
            for (let i = 0; i < numbersOne.length; i++) {
                if (numbersOne[i] !== numbersTwo[i]) {
                    console.log(`Arrays are not identical. Found difference at ${i} index`); break;
                }
            }


        } else {
            for (let i = 0; i < numbersTwo.length; i++) {
                if (numbersOne[i] !== numbersTwo[i]) {
                    console.log(`Arrays are not identical. Found difference at ${i} index`); break;
                }
            }
        }
    }
}



equalArrays(['1', '15'], ['1'])