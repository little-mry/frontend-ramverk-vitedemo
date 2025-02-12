import './App.css'
import { useState } from 'react';
import SearchMovies from './copmponents/SearchMovies'
import DisplayMovies from './copmponents/DisplayMovies';

export interface Movie {
    Poster: string,
    Title: string,
    Year: string,
    imdbID: string
}

const App = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [searchInput, setSearchInput] = useState('')

  return (
    <>
      <SearchMovies searchInput={searchInput} setSearchInput={setSearchInput}/>
      <DisplayMovies movies={movies} setMovies={setMovies} searchInput={searchInput}/>
    </>
  )
}

export default App
