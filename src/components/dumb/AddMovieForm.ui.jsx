import { useNavigate } from "react-router-dom";

export default function AddMovieFormUi({ onSubmit, onChange, movieDetails, submitStatus }) {

    const navigate = useNavigate()

    return (
        <div className="container py-5">
            <div className="d-flex justify-content-between align-items-center my-4">
                <h2>Add a New Book</h2>
                <button onClick={() => navigate('/admin')} className="btn btn-warning">Go back to home</button>
            </div>

            <form onSubmit={(e) => { e.preventDefault(); onSubmit(); }} encType="multipart/form-data">
                <div className="form-group">
                    <label>Title</label>
                    <input
                        type="text"
                        className="input_edit_page w-100 d-block"
                        value={movieDetails.title}
                        onChange={(e) => onChange('title', e.target.value)}
                        autoFocus
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Abstract</label>
                    <textarea
                        type="text"
                        className="input_edit_page w-100 d-block"
                        value={movieDetails.abstract}
                        onChange={(e) => onChange('abstract', e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Director</label>
                    <input
                        type="text"
                        className="input_edit_page w-100 d-block"
                        value={movieDetails.director}
                        onChange={(e) => onChange('director', e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Genre</label>
                    <input
                        type="text"
                        className="input_edit_page w-100 d-block"
                        value={movieDetails.genre}
                        onChange={(e) => onChange('genre', e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Release Year</label>
                    <input
                        type="number"
                        className="input_edit_page w-100 d-block"
                        value={movieDetails.release_year}
                        onChange={(e) => onChange('release_year', e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Cover Image</label>
                    <input
                        type="file"
                        className="input_edit_page w-100 d-block"
                        onChange={(e) => onChange('cover_image', e.target.files[0])}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Add Movie</button>
                {submitStatus && (
                    <div className={`mt-3 ${submitStatus.state === 'success' ? 'text-success' : 'text-danger'}`}>
                        {submitStatus.message}
                    </div>
                )}
            </form>
        </div>

    );
}