function calculator(numberOne, operator, numberTwo) {

    let result = eval(`${numberOne} ${operator} ${numberTwo}`);

    console.log(result.toFixed(2));


}

calculator(25.5,
    '-',
    3
)