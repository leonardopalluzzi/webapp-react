import { NavLink, Link } from "react-router-dom"

export default function AsideLoggedUi({ id, onLogout }) {
    return (
        <>
            <aside className="aside_threads">
                <div className="container">
                    <ul className="list-unstyled">
                        <li><NavLink to={"/"}>Home</NavLink></li>
                        <li><NavLink to={"/threads"}>Threads</NavLink></li>
                        <li><NavLink to={`/${id}/profile`}>Profile</NavLink></li>
                        <li><NavLink to={"/"}>My threads</NavLink></li>
                    </ul>
                </div>
                <div className="container">
                    <div className="popular pop_container">
                        <h5 className="mb-4">Popular Threads</h5>
                        <ul className="list-unstyled">
                            <li>Lorem.</li>
                            <li>Nihil?</li>
                            <li>Aspernatur.</li>
                            <li>Maxime!</li>
                        </ul>
                    </div>
                </div>

                <div>
                    <button onClick={() => onLogout()} className="btn btn-warning">Logout</button>
                </div>
            </aside>

        </>
    )
}