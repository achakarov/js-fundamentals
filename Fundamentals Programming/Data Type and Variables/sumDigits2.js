function sumDigits2 (number) {

    number = number.toString();
    let sumTotal = 0; 

    for (let position = 0; position < number.length; position++) {
        sumTotal += Number(number[position]); 
    }
    console.log(sumTotal);
    
}

sumDigits2 (333)