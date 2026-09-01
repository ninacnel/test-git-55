import { Button, Col, Container, Row } from "react-bootstrap"
import { moviesList } from "../data"
import MovieItem from "./MovieItem"
import { useState } from "react"

const Movies = () => {
  // useState
  const [totalViews, setTotalViews] = useState(0);
  const [lastMovie, setLastMovie] = useState("");

  const handleChangeTotalViews = () => {
    setTotalViews((prevState) => prevState + 1);
  }

  const handleChangeLastMovie = (title) => {
    setLastMovie(title);
  }

  return (
    <>
      <h1>Reproducciones totales: {totalViews}</h1>
      <h2>Ultima pelicula vista: {lastMovie}</h2>

      <Container>
        <Row className="justify-content-center">
          {moviesList.map((item) => (
            <Col key={item.movieId} className="col-12 col-md-6 col-lg-3 m-2">
              <MovieItem
                movie={item}
                onMoviePlayed={handleChangeTotalViews}
                onLastMoviePlayed={handleChangeLastMovie}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  )
}

export default Movies