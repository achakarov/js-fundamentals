function maxSequenceOfEqualElements(array) {

    let baseIndex = 0;
    let bestSequence = [];

    for (let index = baseIndex; index < array.length; index++) {

        let element = array[index];
        let currentSequence = [element];

        for (let j = index + 1; j < array.length; j++) {
            let nextElement = array[j];
            baseIndex++;
            
            if (element === nextElement) {
                currentSequence.push(nextElement);

            } else {
                break;
            }


        }
        if (currentSequence.length > bestSequence.length) {
            bestSequence = currentSequence;
        }
    }

    console.log(bestSequence.join(" "));
    

}

maxSequenceOfEqualElements([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]); 