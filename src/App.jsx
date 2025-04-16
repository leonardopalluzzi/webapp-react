import { BrowserRouter, Routes, Route } from "react-router-dom"
import { MovieProvider } from "./contexts/movieContext"
import DefaultLayout from "./layouts/DefaultLayout"
import Home from "./pages/Home"
import Movie from "./pages/movie"

function App() {

  return (
    <>
      <MovieProvider>
        <BrowserRouter>
          <Routes>
            <Route Component={DefaultLayout}>
              <Route path="/" Component={Home} />
              <Route path="/:id/movie" Component={Movie} />
            </Route>
          </Routes>
        </BrowserRouter>
      </MovieProvider>
    </>
  )
}

export default App
