function printAndSum(startNum, endNum) {
    let string = "";
    let sum = 0;

    for (let i = startNum; i <= endNum; i++) {
        sum += i;

        string = string + i + " ";

    }

    console.log(string);
    console.log(`Sum: ${sum}`);

}

printAndSum(5, 10)