let movies = [
  {
    id: 0,
    name: "star wars - the new one",
    score: 1
  },
  {
    id: 1,
    name: "toy story",
    score: 8
  },
  {
    id: 2,
    name: "the godfather 1",
    score: 99
  },
  {
    id: 3,
    name: "life of pi",
    score: 100
  }
];

export const getMovies = () => movies;

export const getById = id => {
  const filteredMovies = movies.filter((movie) => movie.id === id);
  return filteredMovies[0];
}

export const deleteMovie = (id) => {
  const cleanedMovies = movies.filter(movie => movie.id !== id);
  if (movies.length > cleanedMovies.length) {
    movies = cleanedMovies;
    return true;
  } else {
    return false;
  }
}

export const addMovie = (name, score) => {
  const newMovie = {
    id: `${movies.length}`,
    name,
    score
  };
  movies.push(newMovie);
  return newMovie;
}