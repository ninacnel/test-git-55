import { moviesList } from "../data"
import MovieItem from "./MovieItem"

const Movies = () => {
  return (
<>
    {moviesList.map((item) => (
        <MovieItem
        key={item.movieId}
        movieTitle={item.title}
        director={item.director}
        year={item.year}
        />
    ))}
</>
  )
}

export default Movies