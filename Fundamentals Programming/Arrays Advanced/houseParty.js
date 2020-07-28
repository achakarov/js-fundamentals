function houseParty(guestNames) {

    let guests = []; 

    for (let infoLine of guestNames) {
        let info = infoLine.split(" "); //masiv ot vseki red s gosti, koito se povtarq za vsqka iteraciq (infoLine) - syzdava nqkolko masiva za vseki red s komanda 
        let name = info[0]; 

        if(!guests.includes(name) && !info.includes("not")) {
            guests.push(name); 
        } else if (!guests.includes(name) && info.includes("not")) {
            console.log(`${name} is not in the list!`); 
        } else if (guests.includes(name) && !info.includes("not")){
            console.log(`${name} is already in the list!`); 
        } else if (guests.includes(name) && info.includes("not")) {
         guests = guests.filter((currentGuest) => currentGuest !== name); // prezapisvame stoinostta na masiva s filtriranata stoinost, zashtoto filter ne promenq originalniq masiv inache
        }

    }    
        console.log(guests.join("\n"));
}

houseParty(['Tom is going!',
'Annie is going!',
'Tom is going!',
'Garry is going!',
'Jerry is going!']

)