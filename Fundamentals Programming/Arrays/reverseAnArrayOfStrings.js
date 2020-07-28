function reverseAnArrayOfStrings(array) {

    let string = ""; 

    for (let i = array.length-1; i >=0; i --) {

        let currentI = String(array[i])

        string += currentI +" "
    }
    console.log(string);
    
}

reverseAnArrayOfStrings(['abc', 'def', 'hig', 'klm', 'nop'])