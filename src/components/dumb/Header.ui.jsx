import { NavLink, Link } from 'react-router-dom'
import { useAuthContext } from '../../contexts/authenticationContext'
import { useNavigate } from 'react-router-dom'

export default function HeaderUi() {
    const { state, logout } = useAuthContext()

    const navigate = useNavigate()

    switch (state) {
        case false:
            return (
                <>
                    <nav
                        className="navbar navbar-expand-sm navbar-dark bg-dark"
                    >
                        <div className="container">
                            <a className="navbar-brand" href="#">FILMS</a>
                            <button
                                className="navbar-toggler d-lg-none"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapsibleNavId"
                                aria-controls="collapsibleNavId"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                            >
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="collapsibleNavId">
                                <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                                    <li className="nav-item">
                                        <NavLink className="nav-link active" to='/'>Home</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link active" to='/film'>Film</NavLink>
                                    </li>
                                </ul>
                            </div>
                            <div className="users">
                                <Link className='mx-4' to={'/register'}>
                                    <button className='btn btn-primary'>Register</button>
                                </Link>
                                <Link to={'/login'}>
                                    <button className='btn btn-primary'>Login</button>
                                </Link>
                            </div>
                        </div>
                    </nav>

                </>
            )
        case true:
            return (
                <>
                    <nav
                        className="navbar navbar-expand-sm navbar-dark bg-dark"
                    >
                        <div className="container">
                            <a className="navbar-brand" href="#">FILMS</a>
                            <button
                                className="navbar-toggler d-lg-none"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapsibleNavId"
                                aria-controls="collapsibleNavId"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                            >
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="collapsibleNavId">
                                <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                                    <li className="nav-item">
                                        <NavLink className="nav-link active" to='/'>Home</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link active" to='/film'>Film</NavLink>
                                    </li>
                                </ul>
                            </div>
                            <div className="users">
                                <button onClick={() => { logout(); navigate('/') }} className='btn btn-primary'>Logout</button>
                            </div>
                        </div>
                    </nav>
                </>
            )
    }
}