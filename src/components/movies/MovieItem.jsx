import { useState } from "react";
import { Badge, Card, Button } from "react-bootstrap";

const MovieItem = ({
  movie,
  onMoviePlayed,
  onLastMoviePlayed,
  onDelete
}) => {
  const [views, setViews] = useState(0);

  const handleMoviePlayed = () => {
    onMoviePlayed();

    setViews((prev) => prev + 1);

    onLastMoviePlayed(movie.title);
  }

  return (
    <Card className="h-100 shadow-sm border-0">
      <Card.Img
        variant="top"
        src={movie.image}
        alt={movie.title}
        style={{
          height: "350px",
          objectFit: "cover",
        }}
      />
      <Card.Body className="d-flex flex-column">

        <div className="d-flex justify-content-between align-items-start mb-2">
          <Card.Title className="fw-bold mb-0">
            {movie.title}
          </Card.Title>

          <Badge bg={movie.isFree ? "success" : "secondary"}>
            {movie.isFree ? "Gratis" : "Premium"}
          </Badge>
        </div>

        <Card.Text className="text-muted mb-2">
          {movie.year} · {movie.duration} min · {movie.country}
        </Card.Text>

        <Card.Subtitle className="mb-3">
          Dirigida por {movie.director}
        </Card.Subtitle>
      </Card.Body>

      <p>Vistas: {views}</p>

      <Button className="m-2" onClick={handleMoviePlayed}>Ver pelicula</Button>

      <Button
        className="m-2"
        onClick={handleMoviePlayed}
      >
        Ver película
      </Button>

      <Button
        className="m-2"
        variant="danger"
        onClick={() => onDelete(movie)}
      >
        Eliminar
      </Button>
    </Card>
  );
};

export default MovieItem;