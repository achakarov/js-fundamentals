function arrayManipulator(arrayNumbers, arrayCommands) {

    let copyNumbers = arrayNumbers.slice();
    let copyCommands = arrayCommands.slice();


    if (copyCommands[0] === "print") {
        console.log(copyNumbers);

    } else {
        for (let i = 0; i < arrayCommands.length; i++) {
            let command = copyCommands.shift().split(" ");

            if (command.includes("add")) {
                copyNumbers.splice(command[1], 0, Number(command[2]));
            } else if (command.includes("contains")) {
                let searchedNum = Number(command[1]);
                if (copyNumbers.includes(searchedNum)) {
                    console.log(copyNumbers.indexOf(searchedNum));
                } else {
                    console.log(-1);
                }

            } else if (command.includes("remove")) {
                copyNumbers.splice(command[1], 1);

            } else if (command.includes("addMany")) {
                for (let j = command.length - 1; j >= 2; j--) {
                    copyNumbers.splice(command[1], 0, Number(command[j]));
                }
            } else if (command.includes("shift")) {
                let rotationsNeeded = command[1] % copyNumbers.length;
                let resultArr = [];

                for (let i in copyNumbers) {

                    if (i >= rotationsNeeded) {
                        let element = copyNumbers[i];
                        resultArr.push(element);
                    }
                }

                for (let index in copyNumbers) {
                    if (index < rotationsNeeded) {

                        resultArr.push(copyNumbers[index]);
                    } else {
                        break;
                    }
                }
                copyNumbers = resultArr;

            } else if (command.includes("sumPairs")) {

                let blankArray = [];
                for (let i = 0; i < copyNumbers.length; i += 2) {
                    let currentElement = copyNumbers[i];
                    let nextElement = copyNumbers[i + 1];
                    let currentSum = currentElement + nextElement;

                    if (nextElement !== undefined) {
                        blankArray.push(currentSum);
                    } else {
                        blankArray.push(currentElement);
                    }
                }
                copyNumbers = blankArray;
            } else {
                let finalResult = copyNumbers.join(", ");
                console.log(`[ ${finalResult} ]`);
                break;
            }
        }
    }
}




arrayManipulator(
    [1, 2, 3, 4, 5],
    ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print', 'print']

)