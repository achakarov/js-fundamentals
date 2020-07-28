function arrayRotation(array, numRotation) {

    let rotationsNeeded = numRotation % array.length;

    let resultArr = [];

    for (let i in array) {

        if (i >= rotationsNeeded) {
            let element = array[i];
            resultArr.push(element);
        }
    }

    for (let index in array) {
        if (index < rotationsNeeded) {

            resultArr.push(array[index]);
        } else {
            break;
        }
    }

    console.log(resultArr.join(" ")); 
    

}
arrayRotation([51, 47, 32, 61, 21], 2)