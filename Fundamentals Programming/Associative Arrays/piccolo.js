function piccolo(input) {

    let parkingLot = [];
    input.forEach((command) => {
        let [direction, carNumber] = command.split(", ");

        if (direction === "IN" && !parkingLot.includes(carNumber)) {
            parkingLot.push(carNumber);
        } else if (direction === "OUT" && parkingLot.includes(carNumber)) {
            parkingLot = parkingLot.filter((x) => x !== carNumber);
        }
    });

    if (parkingLot.length > 0) {
        console.log(parkingLot.sort((a, b) => a.localeCompare(b)).join("\n"));
    } else {
        console.log("Parking Lot is Empty");
    }
}

piccolo(
    ['IN, CA2844AA',
        'IN, CA1234TA',
        'OUT, CA2844AA',
        'IN, CA9999TT',
        'IN, CA2866HI',
        'OUT, CA1234TA',
        'IN, CA2844AA',
        'OUT, CA2866HI',
        'IN, CA9876HH',
        'IN, CA2822UU']
)