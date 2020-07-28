function addAndSubstract(firstNum, secondNum, thirdNum) {

    let sum = sumTwoNumbers(firstNum, secondNum);
    let result = subtractNumber(sum, thirdNum);

    console.log(result);

    function sumTwoNumbers(a, b) {
        return (a + b);
    }

    function subtractNumber(a, b) {
        return (a - b);
    }

}

addAndSubstract(19, 6, 10); 