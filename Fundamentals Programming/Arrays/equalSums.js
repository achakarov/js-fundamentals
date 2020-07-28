function equalSums(numbers) {

    let result = "no";


    for (let i = 0; i < numbers.length; i++) {

        let leftSum = 0;
        let rightSum = 0;

        for (let leftI = 0; leftI < i; leftI++) {

            let leftNumber = numbers[leftI];
            leftSum += leftNumber;

        }

        for (let rightI = i + 1; rightI < numbers.length; rightI++) {

            let rightNumber = numbers[rightI];
            rightSum += rightNumber;
        }



        if (leftSum === rightSum) {
            result = i;
            break;

        } 

    }
    console.log(result);
    
}

equalSums([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4])