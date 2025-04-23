import { useNavigate } from "react-router-dom"

export default function EditMovieUi({ title, director, genre, content, image, releaseYear, creationDate, lastUpdate, onChange, onSubmit }) {

    const navigate = useNavigate()


    return (
        <>
            <div className="container py-5">
                <div className="d-flex justify-content-between align-items-center">
                    <h1>Edit Movie Details</h1>
                    <button onClick={() => navigate('/admin')} className="btn btn-warning">Go back to home</button>
                </div>

                <div className="row row-cols-1 row-cols-sm-2">
                    <div className="col">
                        <img className="details_image w-100" src={`http://localhost:3000/${image}`} alt="" />

                    </div>
                    <form onSubmit={(e) => onSubmit(e)} className="col d-flex flex-column" method="PATCH" encType="multipart/form-data">
                        <label htmlFor="title">Title:</label>
                        <input className="input_edit_page title" name="title" value={title} onChange={(e) => onChange(e.target.name, e.target.value)} type="text" autoFocus />

                        <label htmlFor="director">Director:</label>
                        <input className="input_edit_page director" name="director" value={director} onChange={(e) => onChange(e.target.name, e.target.value)} type="text" />

                        <label htmlFor="content">Abstract:</label>
                        <textarea className="input_edit_page content" name="content" value={content} onChange={(e) => onChange(e.target.name, e.target.value)} type="text" />

                        <label htmlFor="genre">Genre:</label>
                        <input className="input_edit_page genre" name="genre" value={genre} onChange={(e) => onChange(e.target.name, e.target.value)} type="text" />

                        <label htmlFor="image">Change image:</label>
                        <input className="input_edit_page image" type="file" name="image" onChange={(e) => onChange(e.target.name, e.target.files[0])} />

                        <label htmlFor="lastUpdate">Release Year:</label>
                        <span className="input_edit_page last_update">{releaseYear}</span>

                        <label htmlFor="lastUpdate">Last Update:</label>
                        <span className="input_edit_page last_update">{lastUpdate}</span>

                        <label htmlFor="lastUpdate">Creation Date:</label>
                        <span className="input_edit_page last_update">{creationDate}</span>

                        <button className="btn btn-primary">Save</button>
                    </form>
                    <div className="col">
                    </div>
                </div>
            </div>
        </>
    )
}