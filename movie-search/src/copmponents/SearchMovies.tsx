const SearchMovies = ({setSearchInput, searchInput}: {setSearchInput: React.Dispatch<React.SetStateAction<string>>, searchInput: string}) => {

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchInput(e.target.value)
    console.log(e.target.value);
  }

  function handleSubmit(e:React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }
  return (
    <>
        <form className="search__con" onSubmit={handleSubmit}>
            <h2>Search for a movie:</h2>
            <input value={searchInput} onChange={handleChange}/>
        </form>
       
    </>
  )
}

export default SearchMovies