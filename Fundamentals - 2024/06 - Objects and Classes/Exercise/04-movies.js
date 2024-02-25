function solve(input) {
    class Movie {
        constructor(name, director, date) {
            this.name = name;
            this.director = director;
            this.date = date;
        }
    }

    let movies = [];

    for (let movieInfo of input) {
        if (movieInfo.includes('addMovie')) {
            let token = movieInfo.split('addMovie ');
            let name = token[1];
            let curMovie = new Movie(name);
            movies.push(curMovie);
        } else if (movieInfo.includes('directedBy')) {
            let token = movieInfo.split(' directedBy ');
            let [movieName, directorName] = token;
            for (let movie of movies) {
                if (movie.name === movieName) {
                    movie.director = directorName;
                }
            }
        } else if (movieInfo.includes('onDate')) {
            let token = movieInfo.split(' onDate ');
            let [movieName, movieDate] = token;
            for (let movie of movies) {
                if (movie.name === movieName) {
                    movie.date = movieDate;
                }
            }
        }
    }

    for (let movie of movies) {
        if (movie.date && movie.director) {
            console.log(JSON.stringify(movie));
        }
    }
}

// solve([
//     'addMovie Fast and Furious',
//     'addMovie Godfather',
//     'Inception directedBy Christopher Nolan',
//     'Godfather directedBy Francis Ford Coppola',
//     'Godfather onDate 29.07.2018',
//     'Fast and Furious onDate 30.07.2018',
//     'Batman onDate 01.08.2018',
//     'Fast and Furious directedBy Rob Cohen'
// ]);
solve([
    'addMovie The Avengers',
    'addMovie Superman',
    'The Avengers directedBy Anthony Russo',
    'The Avengers onDate 30.07.2010',
    'Captain America onDate 30.07.2010',
    'Captain America directedBy Joe Russo'
]);