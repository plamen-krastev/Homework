function moviesInfo(arr) {

    let movies = [];

    for (let command of arr) {
        if (command.includes('addMovie')) {
            let movieName = command.split('addMovie ')[1];
            let movieObject = { name: movieName };
            movies.push(movieObject);
        } else if (command.includes('directedBy')) {
            let [movieName, directorName] = command.split(' directedBy ');
            let movie = movies.find(movie => movie.name == movieName);

            if (movie) {
                movie.director = directorName;
            }
        } else if (command.includes('onDate')) {
            let [movieName, onDate] = command.split(' onDate ');
            let movie = movies.find(movie => movie.name == movieName);

            if (movie) {
                movie.date = onDate;
            }
        }
    }

    for (let movie of movies) {
        if (movie.date && movie.director) {
            console.log(JSON.stringify(movie));
            // console.log(movie);
        }
    }
}

// moviesInfo ([
//   'addMovie Fast and Furious',
//   'addMovie Godfather',
//   'Inception directedBy Christopher Nolan',
//   'Godfather directedBy Francis Ford Coppola',
//   'Godfather onDate 29.07.2018',
//   'Fast and Furious onDate 30.07.2018',
//   'Batman onDate 01.08.2018',
//   'Fast and Furious directedBy Rob Cohen'
//   ]
// );

moviesInfo ([
  'addMovie The Avengers',
  'addMovie Superman',
  'The Avengers directedBy Anthony Russo',
  'The Avengers onDate 30.07.2010',
  'Captain America onDate 30.07.2010',
  'Captain America directedBy Joe Russo'
  ]
);