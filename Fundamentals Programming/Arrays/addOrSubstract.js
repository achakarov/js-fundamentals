function addOrSubstract(array) {

    let originalSum = 0; 
    let modifiedSum = 0; 
    let newArray = []; 

    for (let i = 0; i < array.length; i++) {

        let currentNum = array[i]; 
        originalSum += currentNum; 

        if (currentNum % 2 === 0) {
            currentNum += i; 
            modifiedSum += currentNum; 
            newArray.push(currentNum); 

        } else {
            currentNum -= i; 
            modifiedSum += currentNum; 
            newArray.push(currentNum); 
        }
    }
    console.log(newArray);
    console.log(originalSum);
    console.log(modifiedSum);  

}

addOrSubstract([5, 15, 23, 56, 35])