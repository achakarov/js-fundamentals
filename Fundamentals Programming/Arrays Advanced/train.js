function train(array) {

    let copy = array.slice(); // kopirame vhodniq masiv za da ne rabotim direktno s nego
    let train = copy[0].split(" ").map(makeMeNumber); // splitvame masiva po space i go obryshtame v chislo
    let maxCapacity = Number(copy[1]);
    let commands = copy.slice(2);

    for (let currentCommand of commands) {
        let commandInfo = currentCommand.split(" "); //masiv s komandi

        if (commandInfo.length === 2) {   // proverqvame dali dyljinata na masiva e 2 , toest ima 2 komandi (Add 10...); 
            let wagon = Number(commandInfo[1]);
            train.push(wagon);
        } else {
            let passengers = Number(commandInfo[0]);

            for (let wagon in train) {
                let currentPassengers = train[wagon];

                if ((passengers + currentPassengers) <= maxCapacity) {
                    train[wagon] += passengers;
                    break;
                }
            }
        }
    }

    console.log(train.join(" "));



    function makeMeNumber(element) {
        return Number(element);
    }

}

train(['32 54 21 12 4 0 23',
    '75',
    'Add 10',
    'Add 0',
    '30',
    '10',
    '75']
)