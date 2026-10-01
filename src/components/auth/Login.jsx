import { useRef, useState } from "react";
import { Button, Card, Col, Form, FormGroup, Row } from "react-bootstrap";
import { useNavigate } from "react-router";

const initialErrors = {
    email: false,
    password: false,
};

const Login = ({ onLogIn }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState(initialErrors);

    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const navigate = useNavigate();

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        setErrors((prevErrors) => ({ ...prevErrors, email: false }));
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        setErrors((prevErrors) => ({ ...prevErrors, password: false }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!email.length) {
            setErrors((prevErrors) => ({ ...prevErrors, email: true }));
            emailRef.current.focus();
            return;
        }

        else if (!password.length) {
            setErrors((prevErrors) => ({ ...prevErrors, password: true }));
            passwordRef.current.focus();
            return;
        }

        alert(`Usuario con email: ${email} ha iniciado sesion`);
        onLogIn();
        navigate("/");
    }

    return (
        <Card className="w-100 mt-5 mx-3 p-3 px-5 shadow">
            <Card.Body>
                <Form onSubmit={handleSubmit}>
                    <FormGroup className="mb-4">
                        <Form.Control
                            type="email"
                            ref={emailRef}
                            placeholder="Ingresar email"
                            value={email}
                            onChange={handleEmailChange}
                            className={errors.email && "is-invalid"}
                        />
                    </FormGroup>
                    <FormGroup className="mb-4">
                        <Form.Control
                            type="password"
                            placeholder="Ingresar contraseña"
                            value={password}
                            onChange={handlePasswordChange}
                            ref={passwordRef}
                            className={errors.password && "is-invalid"}
                        />
                    </FormGroup>
                    <Row>
                        <Col />
                        <Col md={6} className="d-flex justify-content-end">
                            <Button variant="secondary" type="submit">
                                Iniciar sesión
                            </Button>
                        </Col>
                    </Row>
                </Form>
            </Card.Body>
        </Card>
    );
};


export default Login;
