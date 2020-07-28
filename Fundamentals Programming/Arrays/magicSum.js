function magicSum(array, magicNum) {

    for (let i = 0; i < array.length; i++) {

        let currentNum = array[i];

        for (let j = i + 1; j < array.length; j++) {

            let nextNum = array[j];
            if (currentNum + nextNum === magicNum) {
                console.log(`${currentNum} ${nextNum}`);

            }
        }

    }

}

magicSum([14, 20, 60, 13, 7, 19, 8],
    27
) 