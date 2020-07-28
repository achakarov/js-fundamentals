function factorialDivision(numberOne, numberTwo) {

    let factorialTotalOne = factorialOne(numberOne);
    let factorialTotalTwo = factorialTwo(numberTwo);

    console.log((factorialTotalOne / factorialTotalTwo).toFixed(2));



    function factorialOne(num) {
        let sum = 1;

        for (let i = 1; i <= num; i++) {
            sum *= i;
        }
        return sum;
    }

    function factorialTwo(num) {
        let sum = 1;

        for (let j = 1; j <= num; j++) {
            sum *= j;
        }

        return sum;
    }
}

factorialDivision(6, 2)