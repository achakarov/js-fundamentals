function sumDigits (num) {

    let sum = 0; 
    let numString = String(num)

    for (let i = 0; i < numString.length; i++) {

        let currentNum = num % 10; 
        sum += currentNum; 
        num = Math.trunc(num / 10); 
    }

    console.log(sum);
    
}

sumDigits (245678)