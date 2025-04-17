import { useNavigate } from "react-router-dom"

export default function Error({ state, message }) {

    const navigate = useNavigate()

    return (
        <>
            <div className="container_not_found d-flex flex-column align-items-center justify-content-center">
                <h1>{state}</h1>
                <p>Seems like there was an error: {message}</p>
                <span><i class="bi bi-emoji-frown fs-1"></i></span>
                <button onClick={() => window.location.reload()} className="btn btn-primary my-4">Try refreshing the page</button>
            </div>
        </>
    )
}