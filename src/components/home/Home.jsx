import { useNavigate } from "react-router"
import Movies from "../movies/Movies";
import { Button } from "react-bootstrap";

const Home = () => {
    const navigate = useNavigate();

    const handleLoginNavigate = () => {
        navigate("login")
    }

  return (
    <>
    <Button onClick={handleLoginNavigate}>Cerrar sesion</Button>
    <Movies />
    </>
  )
}
export default Home