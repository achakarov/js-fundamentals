function bonusScoringSystem(array) {

    let studentCount = Number(array.shift());
    let lecturesCount = Number(array.shift());
    let initialBonus = Number(array.shift());
    let biggestNumber = 0;

    for (let i = 0; i < studentCount; i++) {
        let currentNumber = Number(array[i]);

        if (currentNumber > biggestNumber) {
            biggestNumber = currentNumber;
        }
    }
    let totalBonus = 0;
    if (lecturesCount > 0) {
        totalBonus = biggestNumber / lecturesCount * (5 + initialBonus);
    }

    console.log(`Max Bonus: ${Math.ceil(totalBonus)}.`);
    console.log(`The student has attended ${biggestNumber} lectures.`);
}


bonusScoringSystem(
    [
        "10",
        "30",
        "14",
        "8",
        "23",
        "27",
        "28",
        "15",
        "17",
        "25",
        "26",
        "5",
        "18"
    ]
)