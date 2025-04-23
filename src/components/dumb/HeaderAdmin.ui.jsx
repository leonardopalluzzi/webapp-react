import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

export default function HeaderAdminUi({ logout }) {

    const navigate = useNavigate()

    return (
        <>
            <header>
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
                                    <NavLink className="nav-link active" to='/threads'>Threads</NavLink>
                                </li>
                            </ul>
                        </div>
                        <div className="users">
                            <button onClick={() => { navigate('/admin') }} className='btn btn-primary mx-4'>Dashboard</button>
                            <button onClick={() => { logout(); navigate('/') }} className='btn btn-primary'>Logout</button>
                        </div>
                    </div>
                </nav>
            </header>

        </>
    )
}