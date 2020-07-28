function loadingBar(number) {

    let repeatCount = number / 10;
    let stringPercentage = "";
    let percentNum = 0;
    let stringDots = "";

    for (let percentCount = 0; percentCount < repeatCount; percentCount++) {
        let symbol = "%";
        stringPercentage += symbol;
        percentNum++;
    }

    for (let dotsCount = 0; dotsCount < (10 - repeatCount); dotsCount++) {
        let symbol = ".";
        stringDots += symbol;
    }
    let finalString = stringPercentage + stringDots;

    if (repeatCount < 10) {
        console.log(`${number}% [${finalString}]`);
        console.log("Still loading...");
    } else {
        console.log(`${number}% Complete!`);
        console.log(`[${finalString}]`);
    }

}

loadingBar(0)