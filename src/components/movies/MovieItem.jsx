const MovieItem = ({ movieTitle, director, year }) => {
  return (
    <div>
        <h1>{movieTitle}</h1>
        <h2>{director}</h2>
        <h3>{year}</h3>
    </div>
  )
}

export default MovieItem