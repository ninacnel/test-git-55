import { Button, Col, Container, Row } from "react-bootstrap"
import { moviesList } from "../data"
import MovieItem from "./MovieItem"
import { useState } from "react"

const Movies = () => {
  // useState
  const [number, setNumber] = useState(0);
  const [text, setText] = useState("");
  const [show, setShow] = useState(false);

  const handleChangeNumber = () => {
    setNumber((prevState) => prevState + 1);
  }

  const handleChangeShow = () => {
    setShow((prevState) => !prevState);
  }

  return (
    <>
      <h1>{number}</h1>
      {!text.length ? <p>No hay nada para mostrar</p> : <h2>{text}</h2>}
      <Button onClick={handleChangeNumber}>Incrementar</Button>
      <Button variant="warning" onClick={handleChangeShow}>Mostrar</Button>
      {show && <input type="text" onChange={(event) => setText(event.target.value)} />}
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
    </>
  )
}

export default Movies