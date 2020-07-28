function amazingNumbers(numberInput) {

    let number = numberInput;
    let sum = 0;
    let isAmazing = false; 

    while (number > 0) {
        let currentDigit = number % 10;
        sum += currentDigit; 

        number = Math.trunc(number / 10); 
    }

    while (sum > 0) {
        let singleDigit = sum % 10;

        if (singleDigit === 9) {
            isAmazing = true; 
            break; 
        }
        

        sum = Math.trunc(number / 10); 
    }

    if (isAmazing) { 
        console.log(`${numberInput} Amazing? True`);
        
    } else {
        console.log(`${numberInput} Amazing? False`);

    }



}

amazingNumbers (1233)