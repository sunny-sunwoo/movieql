// import { getMovies, getById, addMovie, deleteMovie } from "./movieDb";
// import { getMovies } from "./movieApi";
import { getMovies, getMovie, getSuggestions } from "./movieApi2";
const resolvers = {
  Query: {
    movies: (_, { limit, rating }) => getMovies(limit, rating),
    movie: (_, { id }) => getMovie(id),
    suggestedMovies: (_, { id }) => getSuggestions(id)
  },
};
export default resolvers;