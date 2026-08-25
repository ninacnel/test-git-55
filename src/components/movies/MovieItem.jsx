import { Card } from "react-bootstrap"

const MovieItem = ({ movieTitle, director, year }) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{movieTitle}</Card.Title>
        <Card.Text>{year}</Card.Text>
        <Card.Subtitle>{director}</Card.Subtitle>
      </Card.Body>
    </Card>
  )
}

export default MovieItem