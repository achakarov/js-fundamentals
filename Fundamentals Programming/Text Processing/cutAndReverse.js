function cutAndReverse(string) {

    let half = string.length / 2;
    let firstHalf = string.substring(0, half).split("").reverse();
    let secondHalf = string.substring(half).split("").reverse();

    console.log(firstHalf.join(""));
    console.log(secondHalf.join(""));
}

cutAndReverse(
    'tluciffiDsIsihTgnizamAoSsIsihT'
)