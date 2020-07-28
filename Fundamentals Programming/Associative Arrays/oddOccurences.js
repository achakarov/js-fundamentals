function oddOccurences(input) {

    let elements = input.split(" ").map((x) => x.toLowerCase());
    let map = generateObject(new Set(elements));

    elements.forEach((ele) => {
        map.set(ele, map.get(ele) + 1);
    });

    let output = "";

    Array.from(map.entries()).forEach((kvpArr) => {
        let [key, value] = kvpArr;
        if (Number(value) % 2 !== 0) {
            output += key + " ";
        }
    });

    console.log(output);

    function generateObject(set) {
        let map = new Map();
        set.forEach((x) => {
            map.set(x, 0);
        })
        return map;
    }
}

oddOccurences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')