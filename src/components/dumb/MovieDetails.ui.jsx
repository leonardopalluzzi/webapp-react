export default function MovieDetailsUi({ comments, image, title, content }) {
    return (
        <>
            <div className="container py-5 details_page">
                <div className="row row-cols-1 row-cols-sm-2">
                    <div className="col">
                        <img className="details_image" src={`http://localhost:3000/${image}`} alt="" />
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