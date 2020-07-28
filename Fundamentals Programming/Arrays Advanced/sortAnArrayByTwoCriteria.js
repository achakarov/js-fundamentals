function sortAnArrayByTwoCriteria(array) {

    let copy = array.slice();
    let sortedResult = copy.sort(sorting);

    console.log(sortedResult.join("\n"));

    function sorting(a, b) {

        if (a.length > b.length) {   //ascending order
            return 1;
        } else if (a.length < b.length) {    //ascending order
            return -1;
        } else {
            return a.localeCompare(b); //ascending order
        }

    }
}

sortAnArrayByTwoCriteria(["Isacc", "Theodor", "Jack", "Harrison", "George", "Harry"])