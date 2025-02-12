import { Movie } from "../App"
import { useEffect } from "react"
import MovieCard from "./MovieCard"

const api = 'http://www.omdbapi.com/'
const key = '?apikey=37fe945a&s='

const DisplayMovies = ({movies, setMovies, searchInput}: {movies: Movie[], setMovies: React.Dispatch<React.SetStateAction<Movie[]>> , searchInput: string}) => { 
    useEffect(() => {
        if(!searchInput) return;

        fetch(`${api}${key}${searchInput}`)
            .then((res) => res.json())
            .then((data) => {
                if (data.Search) {
                    setMovies(data.Search)
                } else {
                    console.error('No movies found');
                }
            })
            .catch((error) => console.error('Error fetching movies', error));
    }, [searchInput])
  return (
    <>
        {searchInput.length > 2 && (
        <ul className="movie__card__con">
            {movies.length > 0 ? (
            movies.map((movie) => (
              <MovieCard movie={movie} key={movie.imdbID}/>
            ))
            ):(
                <li className="movie__card no-movies">No movies found</li>
            )}
        </ul>
        )}
    </>
  )
}

export default DisplayMovies