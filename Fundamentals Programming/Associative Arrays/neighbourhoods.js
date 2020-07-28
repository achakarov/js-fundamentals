function neighbourhoods(input) {

    let map = new Map(); 
    let neighbourhoods = input.shift().split(", "); 

    for (let neighbourhood of neighbourhoods) {
        map.set(neighbourhood, []); 
    }

    for (let i = 0; i < input.length; i++) {
        let currentLine = input[i].split(" - ");
        let currentNeighbourhood = currentLine[0]; 
        let currentPerson = currentLine[1]; 

        if (neighbourhoods.includes(currentNeighbourhood)) {
            map.get(currentNeighbourhood).push(currentPerson); 
        }
    }

    let sorted = Array.from(map).sort((a, b) => b[1].length - a[1].length); 

    for (let kvp of sorted) {

        if (kvp[1].length > 0) {
            console.log(`${kvp[0]}: ${kvp[1].length}`); 
            for (let j = 0; j < kvp[1].length; j++){
                let current = kvp[1]; 
                console.log(`--${current[j]}`); 
            }
        } else {
            console.log(`${kvp[0]}: ${kvp[1].length}`); 
        }
      
    }
}

neighbourhoods(['Abbey Street, Herald Street, Bright Mews',
'Bright Mews - Garry',
'Bright Mews - Andrea',
'Bright Mews - Andrea',
'Invalid Street - Tommy',
'Abbey Street - Billy']
)