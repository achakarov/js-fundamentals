function rightPlace(missingString, symbol, resultString) {

    let fullString = missingString.replace("_", symbol);

    if (fullString === resultString) {
        console.log("Matched");

    } else {
        console.log("Not Matched");

    }
}