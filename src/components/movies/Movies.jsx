import { Button, Col, Container, Row } from "react-bootstrap"
import { moviesList } from "../data"
import MovieItem from "./MovieItem"
import { useState } from "react"
import MovieForm from "./MovieForm"
import DeleteMovieModal from "../shared/DeleteMovieModal"

const Movies = () => {
  // useState
  const [movies, setMovies] = useState(moviesList);
  const [totalViews, setTotalViews] = useState(0);
  const [lastMovie, setLastMovie] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [movieToDelete, setMovieToDelete] = useState(null);

  const handleShowForm = () => {
    setShowForm((prevState) => !prevState);
  }

  const handleChangeTotalViews = () => {
    setTotalViews((prevState) => prevState + 1);
  }

  const handleChangeLastMovie = (title) => {
    setLastMovie(title);
  }

  const handleAddMovie = (newMovie) => {
    setMovies((prevState) => [newMovie, ...prevState]);
  }

  const handleShowDeleteModal = (movie) => {
    setMovieToDelete(movie);
    setShowDeleteModal(true);
  }

  const handleHideDeleteModal = () => {
    setShowDeleteModal(false);
    setMovieToDelete(null);
  }

  const handleDeleteMovie = (movieId) => {
    setMovies((prevMovies) =>
      prevMovies.filter(movie => movie.movieId !== movieId)
    );
  }

  return (
    <>
      <h1>Reproducciones totales: {totalViews}</h1>
      <h2>Ultima pelicula vista: {lastMovie}</h2>

      <Button variant="light" onClick={handleShowForm}>{showForm ? "Esconder formulario" : "Mostrar formulario"}</Button>

      {showForm && <MovieForm onAddMovie={handleAddMovie} />}

      <Container>
        <Row className="justify-content-center">
          {movies.map((item) => (
            <Col key={item.movieId} className="col-12 col-md-6 col-lg-3 m-2">
              <MovieItem
                movie={item}
                onMoviePlayed={handleChangeTotalViews}
                onLastMoviePlayed={handleChangeLastMovie}
                onDelete={handleShowDeleteModal}
              />
            </Col>
          ))}
        </Row>
      </Container>

      {movieToDelete && (
        <DeleteMovieModal
          show={showDeleteModal}
          movie={movieToDelete}
          onHide={handleHideDeleteModal}
          onDelete={handleDeleteMovie}
        />
      )}
    </>
  )
}

export default Movies