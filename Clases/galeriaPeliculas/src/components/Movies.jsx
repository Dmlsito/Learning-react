import '../css/Movies.css'
export const Movies = ({movies}) => {
    return  (
    <ul className='App-main-gallery'>
    {
      movies ? 
      movies.map(movie => {
        return <li key={movie.id} className=''>{movie.title}
        <span>{movie.year}</span>
        <img src={movie.poster}/></li>
      }) : 
      <p>No se han encontrado peliculas</p>
    }
    </ul>
    )
}