import { BrowserRouter, Routes, Route } from "react-router-dom"
import { MovieProvider } from "./contexts/movieContext"
import DefaultLayout from "./layouts/DefaultLayout"
import Home from "./pages/Home"
import Movie from "./pages/movie"
import Register from "./pages/Register"
import Login from "./pages/Login"
import { AuthProvider } from "./contexts/authenticationContext"
import NotFound from "./pages/NotFound"
import Dashboard from "./pages/Dashboard"
import Edit from './pages/Edit'
import AdminRoute from "./components/smart/AdminRoute"
import AddMovie from "./pages/AddMovie"
import TreadCreation from "./pages/TreadCreation"
import Threads from "./pages/Threads"
import Thread from "./pages/Thread"
import ThreadsLayout from './layouts/ThreadsLayout'
import UserDashboard from "./pages/UserDashboard"

function App() {

  return (
    <>
      <AuthProvider>
        <MovieProvider>
          <BrowserRouter>
            <Routes>
              <Route Component={ThreadsLayout}>
                <Route path="/threads" Component={Threads} />
                <Route path="/:id/thread" Component={Thread} />
                <Route path="/dashboard" Component={UserDashboard} />
              </Route>
              <Route Component={DefaultLayout}>
                <Route path="/login" Component={Login} />
                <Route path="/register" Component={Register} />
                <Route path="/" Component={Home} />
                <Route path="/:id/movie" Component={Movie} />
                <Route path="/:id/create_tread" Component={TreadCreation} />

                <Route path="/admin" element={
                  <AdminRoute requiredRole={1}>
                    <Dashboard />
                  </AdminRoute>
                } />
                <Route path="/addmovie" element={<AdminRoute requiredRole={1}>
                  <AddMovie />
                </AdminRoute>} />
                <Route path="/:id/edit" element={<AdminRoute requiredRole={1}>
                  <Edit />
                </AdminRoute>} />
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
