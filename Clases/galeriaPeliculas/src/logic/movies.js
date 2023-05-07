
const API_KEY = '64561d39'

export const searchMovies =  async ({ search }) => {
  const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`)
  const json = await response.json()
  const movies = json.Search
 
  return movies?.map( movie => ({
    id: movie.imdbID,
    title: movie.Title,
    poster: movie.Poster,
    year: movie.Year,
  })) 
    
} 