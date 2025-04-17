import { BrowserRouter, Routes, Route } from "react-router-dom"
import { MovieProvider } from "./contexts/movieContext"
import DefaultLayout from "./layouts/DefaultLayout"
import Home from "./pages/Home"
import Movie from "./pages/movie"
import Register from "./pages/Register"
import Login from "./pages/Login"
import { AuthProvider } from "./contexts/authenticationContext"
import NotFound from "./pages/NotFound"

function App() {

  return (
    <>
      <AuthProvider>
        <MovieProvider>
          <BrowserRouter>
            <Routes>
              <Route Component={DefaultLayout}>
                <Route path="/login" Component={Login} />
                <Route path="/register" Component={Register} />
                <Route path="/" Component={Home} />
                <Route path="/:id/movie" Component={Movie} />
                <Route path="*" Component={NotFound} />
              </Route>
            </Routes>
          </BrowserRouter>
        </MovieProvider>
      </AuthProvider>

    </>
  )
}

export default App
