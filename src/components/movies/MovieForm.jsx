import { useState } from "react";
import { Button, Form, Card } from "react-bootstrap";

const initialForm = {
    title: "",
    director: "",
    year: 0,
    duration: 0,
    cast: [""],
    country: "",
    isFree: true,
    image: "https://i.pinimg.com/1200x/cb/15/97/cb15975ac00a122cbeca0b9fb14307d5.jpg"
};

const MovieForm = ({ onAddMovie }) => {
    const [form, setForm] = useState(initialForm);

    const handleChange = (event) => {
        const { name, value } = event.target;

        setForm({
            ...form,
            [name]: value
        });
    };

    const handleCastChange = (event) => {
        const { value } = event.target;

        setForm({
            ...form,
            cast: value.split(",")
        });
    };

    const handleCheck = (event) => {
        const { name, checked } = event.target;

        setForm({
            ...form,
            [name]: checked
        });
    };

    const handleAddMovie = (event) => {
        event.preventDefault();

        const newMovie = {
            movieId: Math.random(),
            ...form
        };
        console.log(newMovie)
        onAddMovie(newMovie);

        setForm(initialForm);
    };

    return (
        <Card className="w-50 p-4">
            <Form onSubmit={handleAddMovie}>

                <Form.Group className="mb-3">
                    <Form.Label>Título</Form.Label>
                    <Form.Control
                        type="text"
                        name="title"
                        value={form.title}
                        onChange={handleChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Director</Form.Label>
                    <Form.Control
                        type="text"
                        name="director"
                        value={form.director}
                        onChange={handleChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Año</Form.Label>
                    <Form.Control
                        type="number"
                        name="year"
                        value={form.year}
                        onChange={handleChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Duración</Form.Label>
                    <Form.Control
                        type="number"
                        name="duration"
                        value={form.duration}
                        onChange={handleChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>País</Form.Label>
                    <Form.Control
                        type="text"
                        name="country"
                        value={form.country}
                        onChange={handleChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Actores</Form.Label>

                    <Form.Control
                        type="text"
                        value={form.cast}
                        onChange={handleCastChange}
                        placeholder="Separar nombres por comas"
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Check
                        type="checkbox"
                        label="Película gratuita"
                        name="isFree"
                        checked={form.isFree}
                        onChange={handleCheck}
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Imagen</Form.Label>
                    <Form.Control
                        type="text"
                        name="image"
                        value={form.image}
                        onChange={handleChange}
                    />
                </Form.Group>

                <Button type="submit">
                    Agregar
                </Button>

            </Form>
        </Card>
    );
};

export default MovieForm;