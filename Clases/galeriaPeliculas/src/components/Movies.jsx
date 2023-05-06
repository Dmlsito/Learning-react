import '../css/Movies.css'
export const Movies = ({movies}) => {
    return  (
    <ul className="movies-list">
    {
      movies ? 
      movies.map(movie => {
        return <li key={movie.imdbID}>{movie.Title}
        <span>{movie.Year}</span>
        <img src={movie.Poster}/></li>
      }) : 
      <p>No se han encontrado peliculas</p>
    }
    </ul>
    )
}