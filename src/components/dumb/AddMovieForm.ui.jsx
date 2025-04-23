export default function AddMovieFormUi({ onSubmit, onChange, movieDetails, submitStatus }) {
    return (
        <div className="container">
            <form onSubmit={(e) => { e.preventDefault(); onSubmit(); }} encType="multipart/form-data">
                <h2>Add a New Book</h2>
                <div className="form-group">
                    <label>Title</label>
                    <input
                        type="text"
                        className="form-control"
                        value={movieDetails.title}
                        onChange={(e) => onChange('title', e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Abstract</label>
                    <input
                        type="text"
                        className="form-control"
                        value={movieDetails.abstract}
                        onChange={(e) => onChange('abstract', e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Director</label>
                    <input
                        type="text"
                        className="form-control"
                        value={movieDetails.director}
                        onChange={(e) => onChange('director', e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Genre</label>
                    <input
                        type="text"
                        className="form-control"
                        value={movieDetails.genre}
                        onChange={(e) => onChange('genre', e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Cover Image</label>
                    <input
                        type="file"
                        className="form-control"
                        onChange={(e) => onChange('cover_image', e.target.files[0])}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Add Book</button>
                {submitStatus && (
                    <div className={`mt-3 ${submitStatus.state === 'success' ? 'text-success' : 'text-danger'}`}>
                        {submitStatus.message}
                    </div>
                )}
            </form>
        </div>

    );
}