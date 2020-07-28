function commonElements(arrayOne, arrayTwo) {

    for (let i = 0; i < arrayOne.length; i++) {
        let elementOne = arrayOne[i];

        for (let j = 0; j < arrayTwo.length; j++) {
            let elementTwo = arrayTwo[j];

            if (elementOne === elementTwo) {
                console.log(`${elementOne}`);

            }
        }
    }
}

commonElements(['Hey', 'hello', 2, 4, 'Peter', 'e'],
['Petar', 10, 'hey', 4, 'hello', '2']

)