function evenAndOddSubsraction (numbers) {

    let evenSum = 0; 
    let oddSum = 0; 

    for (const num of numbers) {
        

        if (num % 2 == 0) {
            evenSum += num;
        } else {
            oddSum += num; 
        }
    }
    console.log(evenSum - oddSum);
    
}

evenAndOddSubsraction ([1,2,3,4,5,6])