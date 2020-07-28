function bombNumbers(array, bombInfo) {

    let workArray = array.slice();

    let bomb = bombInfo[0];
    let range = bombInfo[1];

    let index = workArray.indexOf(bomb);

    while (index > -1) { // ako nqmame nito edna bomba shte vyrne -1; 
        workArray.splice(Math.max((index - range), 0), Math.min(range, index));   // rejem otlqvo

        index = workArray.indexOf(bomb);

        workArray.splice(index, range + 1);    // rejem otdqsno

        index = workArray.indexOf(bomb);
    }

    console.log(calculateSum(workArray));

    function calculateSum(array) {

        let sum = 0;

        for (let n of array) {
            sum += n;
        }
        return sum;
    }
}

bombNumbers([1, 2, 2, 4, 2, 2, 2, 9],
    [4, 2]
)