import { useNavigate } from "react-router-dom"

export default function NotFound() {

    const navigate = useNavigate()

    return (
        <>
            <div className="container_not_found d-flex flex-column align-items-center justify-content-center">
                <h1>404</h1>
                <p>Seems like the page you where looking for doesn't exists</p>
                <span><i class="bi bi-emoji-frown fs-1"></i></span>
                <button onClick={() => navigate('/')} className="btn btn-primary my-4">Go back to home page</button>
            </div>
        </>
    )
}