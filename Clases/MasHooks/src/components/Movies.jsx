 const ListOfMovies = ({movies}) => {
    return (
        <ul>
        {
          movies.map(movie => (
            <li key={movie.id}>
                <h3>{movie.title}</h3>
                <p>{movie.year}</p>
                <img src={movie.poster} alt={movie.title} />
            </li>
          ))
        }
      </ul>
    )
}

const RenderNoMoviesResults = () => <p>No se han encontrado peliculas</p>

export const Movies = ({movies}) => {
    const hasMovies = movies.length > 0

    return (
         hasMovies ? 
            <ListOfMovies movies={movies}/>
        : 
            <RenderNoMoviesResults />
        
    )
}