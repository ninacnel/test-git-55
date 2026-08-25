import { Badge, Card } from "react-bootstrap";

const MovieItem = ({ movie }) => {
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
    </Card>
  );
};

export default MovieItem;