function maxNumber(array) {

    let result = "";

    for (let index = 0; index < array.length; index++) {

        let element = array[index]; 
        let isBigger = true;

        for (let i = index + 1; i < array.length; i ++) {
            let nextElement = array[i]; 
            if(element <= nextElement) {
                isBigger = false; 
                break;
            }
        
        }
        if (isBigger) {
            result += element + " "; 
        }
    }
    console.log(result);
    
}

maxNumber([14, 24, 3, 19, 15, 17])