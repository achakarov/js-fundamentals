function triplesOfLatinLetters (n) { 

        for (let i = 0; i < n; i++) {
            let currentLetterOne = String.fromCharCode(97 +i); 

            for (let j = 0; j < n; j++) {

                let currentLetterTwo = String.fromCharCode(97 + j); 

                for (let k = 0; k < n; k++) {

                    let currentLetterThree = String.fromCharCode(97 + k) ; 
                    console.log(currentLetterOne + currentLetterTwo + currentLetterThree); 
                }
            }
        }

}

triplesOfLatinLetters (3)