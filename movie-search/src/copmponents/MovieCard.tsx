import { Movie } from "../App"

const MovieCard = ({movie}: {movie: Movie}) => {
  return (
    <li className="movie__card">
        <img key={movie.imdbID} className="movie__poster" src={movie.Poster} alt="movie-poster" />
        <p  className="movie__title">{movie.Title}, {movie.Year}</p>
    </li>
  )
}

export default MovieCard