import { NavLink, Link } from "react-router-dom"

export default function AsideNotLoggedUi() {
    return (
        <>
            <aside className="aside_threads">
                <div className="container">
                    <ul className="list-unstyled">
                        <li><NavLink to={"/"}>Home</NavLink></li>
                        <li><NavLink to={"/"}>Profile</NavLink></li>
                        <li><NavLink to={"/"}>My threads</NavLink></li>
                        <li><NavLink to={"/"}>Register</NavLink></li>
                        <li><NavLink to={"/"}>Login</NavLink></li>
                    </ul>
                </div>
                <div>
                    <button className="btn btn-warning">Logout</button>
                </div>
            </aside>

        </>
    )
}