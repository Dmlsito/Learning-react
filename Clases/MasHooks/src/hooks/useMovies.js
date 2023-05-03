import responsiveMovies from '../mocks/json-With-Results.json'
import withNoResults from '../mocks/json-with-noresults.json'

export const useMovies = () => {
    const movies = responsiveMovies.Search
    // Para que no dependamos del contrato de la Api podemos mapear cada pelicula y extraer los datos
    // de cada pelicula
    // De esta forma si cambia la estructura de la Api lo estamos controlando desde un solo sitio
    // asi tendremos que cambiar solo una cosa, en vez de ir a todos los sitios que utilizamos los valores de la Api
    const mappedMovies = movies.map( movie => ({
      id: movie.imdbID,
      title: movie.Title,
      poster: movie.Poster,
      year: movie.Year,
    })) 
  
    return { movies: mappedMovies}
    
  }
  