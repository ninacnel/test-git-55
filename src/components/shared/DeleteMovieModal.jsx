import { Modal, Button } from "react-bootstrap";

const DeleteMovieModal = ({ show, movie, onHide, onDelete }) => {
  const handleDelete = () => {
    onDelete(movie.movieId);
    onHide();
  }

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Eliminar película</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        Está seguro que desea eliminar <b>{movie.title}</b>?
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Cancelar
        </Button>

        <Button variant="danger" onClick={handleDelete}>
          Sí, eliminar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default DeleteMovieModal;