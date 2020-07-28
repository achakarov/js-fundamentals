function mergeArrays(stringArrayOne, stringArrayTwo) {

    let resultArr = []


    for (let i in stringArrayOne) {

        let result;

        if (i % 2 === 0) {
            result = Number(stringArrayOne[i]) + Number(stringArrayTwo[i]);
        } else {
            result = stringArrayOne[i] + stringArrayTwo[i];
        }

        resultArr.push(result);
    }

    console.log(resultArr.join(" - "));


}

mergeArrays(['5', '15', '23', '56', '35'],
    ['17', '22', '87', '36', '11']
)