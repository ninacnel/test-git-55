import { Col, Container, Row } from "react-bootstrap"
import { moviesList } from "../data"
import MovieItem from "./MovieItem"

const Movies = () => {
  return (
    <Container>
      <Row className="justify-content-center">
        {moviesList.map((item) => (
          <Col key={item.movieId} className="col-12 col-md-6 col-lg-3 m-2">
            <MovieItem
              movie={item}
            />
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default Movies