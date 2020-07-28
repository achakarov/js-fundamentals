function binaryDigitsCount(n, b) {

    let array = [];
    let count = 0;

    while (n != 0) {
        let reminder = n % 2;
        array.push(reminder);
        n = Math.floor(n / 2);
    }

    for (let i = 0; i < array.length; i++) {
        if (array[i] == b) {
            count++;
        }
    }

    console.log(count);
}
binaryDigitsCount(10,
    0
)