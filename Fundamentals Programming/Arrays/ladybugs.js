function ladybugs(array) {
    let workingArray = array.slice();
    let fieldSize = workingArray.shift();
    let bugsPosition = workingArray.shift().split(" ");
    let finalBugsArray = [];
    

     for (const position of bugsPosition) {
        let currentBug = Number(position)
        if (currentBug < 0 || currentBug >= fieldSize) { // валидация
           continue;
        }
        finalBugsArray[currentBug] = 1;
    }

       for (let i = 0; i < fieldSize; i++) {
        if (finalBugsArray[i] === undefined) {
            finalBugsArray[i] = 0;
        }
    }
    
for (let i = 0; i < workingArray.length; i ++) {
    let [ladybugIndex, command, jumpLength] = workingArray[i].split(" "); 
    
    ladybugIndex = Number(ladybugIndex);
    jumpLength = Number(jumpLength);

    if (finalBugsArray[ladybugIndex] !== 1 || ladybugIndex < 0 || ladybugIndex >= finalBugsArray.length) {
        continue;
    }
    // check for negative steps
    if (jumpLength < 0) {
        jumpLength = Math.abs(jumpLength);
        if (command === 'right') {
            command = 'left';
        } else if (command === 'left') {
            command = 'right';
        }
    }
    // Free Position
    finalBugsArray[ladybugIndex] = 0;
    if (command === 'right') {
        // Ladybug jumps one time
        let newPosition = ladybugIndex + jumpLength;
        // Jump another time if there is a lady bug
        if (finalBugsArray[newPosition] === 1) {
            newPosition = newPosition + jumpLength;
        }
        if (newPosition < finalBugsArray.length) {
            finalBugsArray[newPosition] = 1;
        }

    } else {
        // Lady bug jumps to the left
        let newPosition = ladybugIndex - jumpLength;
        // Jump another time if there is a lady bug
        if (finalBugsArray[newPosition] === 1) {
            newPosition = newPosition - jumpLength;
        }
        if(newPosition >= 0 ){
            finalBugsArray[newPosition] = 1;
        }
    }

}

console.log(finalBugsArray.join(' '));

}


ladybugs(
    [ 3, '0 1',
'0 right 1',
'2 right 1' ]

)