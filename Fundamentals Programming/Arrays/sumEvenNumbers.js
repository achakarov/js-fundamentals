function sumEvenNumbers(numbers) {

    let sum = 0;

    for (const num of numbers) {
        let currentNum = Number(num);
        if (currentNum % 2 == 0) {
            sum += currentNum
        }
    }
    console.log(sum);

}

sumEvenNumbers(['2','4','6','8','10'])