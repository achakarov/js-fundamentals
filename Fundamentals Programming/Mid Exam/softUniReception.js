function softUniReception(input) {

    let firstWorker = Number(input.shift());
    let secondWorker = Number(input.shift());
    let thirdWorker = Number(input.shift());

    let totalWorkers = firstWorker + secondWorker + thirdWorker;

    let students = Number(input.shift());
    let hours = 0;

    while (students > 0) {
        hours++ ; 

        if (hours % 4 === 0) {
            students -= 0;
        } else {
            students -= totalWorkers;
        }
    }

    console.log(`Time needed: ${hours}h.`);

}


softUniReception(
    ["3",
        "2",
        "5",
        "40"
    ]
)