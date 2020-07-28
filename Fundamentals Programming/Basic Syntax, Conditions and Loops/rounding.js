function rounding(num, decimal) {

    if (decimal <= 15) {
        decimal = decimal;

    } else {
        decimal = 15;

    }
    let a = num.toFixed(decimal);
    let b = parseFloat(a);

    console.log(b);



}

rounding(10.5, 28)