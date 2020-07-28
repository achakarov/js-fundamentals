function condenseArrayToNumber(numbers) {
  let condensed = numbers;

  while (condensed.length > 1) {
    let tempCondensed = []

    for (let index = 0; index < condensed.length - 1; index++) {
      tempCondensed[index] = condensed[index] + condensed[index + 1];

    }

    condensed = tempCondensed; 
  }

console.log(condensed[0]);


}

condenseArrayToNumber([5, 0, 4, 1, 2])