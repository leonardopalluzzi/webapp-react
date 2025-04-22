export default function EditMovieUi({ title, director, genre, content, image, releaseYear, creationDate, lastUpdate, onChange, onSubmit }) {
    return (
        <>
            <div className="container py-5">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3">
                    <div className="col">
                        <img className="details_image" src={`http://localhost:3000/${image}`} alt="" />
                    </div>
                    <form onSubmit={(e) => onSubmit(e)} className="col" method="PATCH">
                        <input className="input_edit_page" name="title" value={title} onChange={(e) => onChange(e.target.name, e.target.value)} type="text" />
                        <input className="input_edit_page" name="director" value={director} onChange={(e) => onChange(e.target.name, e.target.value)} type="text" />
                        <input className="input_edit_page" name="content" value={content} onChange={(e) => onChange(e.target.name, e.target.value)} type="text" />
                        <input className="input_edit_page" name="genre" value={genre} onChange={(e) => onChange(e.target.name, e.target.value)} type="text" />
                        <input className="input_edit_page" name="lastUpdate" value={lastUpdate} onChange={(e) => onChange(e.target.name, e.target.value)} type="text" />
                        <button className="btn btn-primary">Save</button>
                    </form>
                    <div className="col">
                    </div>
                </div>
            </div>
        </>
    )
}