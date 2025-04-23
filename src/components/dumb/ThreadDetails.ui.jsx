export default function ThreadDetailsUi({ threadTitle, threadCreationDate, threadCreator, movieTitle, movieReleaseYear, movieImage, movieGenre, movieDirector, movieDescription, messages }) {
    return (
        <>
            <h1>thread details</h1>
            <span>{threadTitle}</span>
            <span>{threadCreator}</span>
            <span>{movieImage}</span>
        </>
    )
}