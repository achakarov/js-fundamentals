function movies(array) {

    let movies = [];
    array.forEach(line => {
        let tokens = line.split(" ");
        let addIndex = tokens.indexOf("addMovie");
        let directorIndex = tokens.indexOf("directedBy");
        let dateIndex = tokens.indexOf("onDate");

        if (addIndex > -1) {   //proverqvame dali syotvetniqt film go ima v masiva; ako go nqma shte vyrne -1
            movies.push({ name: tokens.slice(addIndex + 1).join(" ") });
        }

        if (directorIndex > -1) {
            let name = tokens.slice(0, directorIndex).join(" ");
            let director = tokens.slice(directorIndex + 1).join(" ");

            movies.forEach(movie => {
                if (movie.name === name) {
                    movie.director = director;   //ako filmyt go ima v masiva, dobavqme direktora
                }
            })
        }

        if (dateIndex > -1) {
            let name = tokens.slice(0, dateIndex).join(" ");
            let date = tokens.slice(dateIndex + 1).join(" ");

            movies.forEach(movie => {

                if (movie.name === name) {
                    movie.date = date;
                }
            })
        }
    });

    movies.forEach(movie => {

        if (movie.name !== undefined && movie.director !== undefined && movie.date !== undefined) {

            console.log(JSON.stringify(movie));
        }
    })

}

movies([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
]
)