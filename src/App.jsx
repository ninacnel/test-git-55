import { BrowserRouter, Route, Routes } from 'react-router'
import Login from './components/auth/Login'
import Movies from './components/movies/Movies'
import Home from './components/home/Home'
import './App.css'
import { useState } from 'react'
import Protected from './components/routes/Protected'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogIn = () => {
    setIsLoggedIn(true);
  }

  return (
    <BrowserRouter>
      <Routes>

        <Route path='/' element={
          <Protected isLoggedIn={isLoggedIn}>
            <Home />
          </Protected>
        } />

        <Route path='login' element={<Login onLogIn={handleLogIn}/>} />
        <Route path='movies' element={
          <Protected isLoggedIn={isLoggedIn}>
            <Movies />
          </Protected>
        } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
