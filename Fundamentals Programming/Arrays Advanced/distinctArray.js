function distinctArray(array) {

    let copy = array.slice();

    let output = [];

    for (let element of copy) {
        if (!output.includes(element)) {  // ako elementyt ne se sydyrja v masiva - go push-vame
            output.push(element);
        }
    }

    console.log(output.join(" "));

}

distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2])