import { useNavigate } from "react-router-dom"

export default function MovieDetailsUi({ comments, image, title, content, id }) {

    const navigate = useNavigate()


    return (
        <>
            <div className="container py-5 details_page">
                <div className="row row-cols-1 row-cols-sm-2">
                    <div className="col">
                        <img className="details_image d-block" src={`http://localhost:3000/${image}`} alt="" />
                        <button onClick={() => navigate(`/${id}/create_tread`)} className="btn btn-primary my-4">Create a New Tread</button>
                    </div>
                    <div className="col">
                        <h1>{title}</h1>
                        <p>{content}</p>
                        <div>{comments}</div>
                    </div>
                </div>
            </div>
        </>
    )
}