function city(name, area, population, country, postCode) {

    let cityName = {
        name: name, 
        area: area, 
        population: population, 
        country:country,
        postCode:postCode,
    } ; 

    for(let key in cityName) {
        console.log(`${key} -> ${cityName[key]}`); 
    }
}

city("Sofia"," 492", "1238438", "Bulgaria", "1000");