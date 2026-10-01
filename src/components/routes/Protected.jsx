import { Navigate } from "react-router"

const Protected = ({ isLoggedIn, children }) => {
    if (!isLoggedIn)
        return <Navigate to="/login" replace/>

    return children;
}
export default Protected