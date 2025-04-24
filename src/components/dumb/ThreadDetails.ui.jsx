import MessageFormUi from "./MessageForm.ui"

export default function ThreadDetailsUi({ submitEsit, newMessage, onChange, onSubmit, threadTitle, threadCreationDate, threadCreator, movieTitle, movieReleaseYear, movieImage, movieGenre, movieDirector, movieDescription, messages }) {
    return (
        <>
            <div className="container my-5 py-5">
                <div className="movie_img">
                    <img src={`http://localhost:3000/${movieImage}`} alt="" />
                    <div className="movie_details">
                        <h2>{movieTitle}</h2>
                        <p>{movieDescription}</p>
                    </div>
                </div>

                <div className="w-50 m-auto">
                    <h5>Thread by: {threadCreator}</h5>
                    <h1>{threadTitle}</h1>

                    <MessageFormUi
                        onSubmit={onSubmit}
                        onChange={onChange}
                        newComment={newMessage}
                        submitEsit={submitEsit}
                    />

                    {messages.map(item => (
                        <>
                            <div className="card_thread">
                                <div className="card_header_thread">
                                    <h6>{item.username}:</h6>
                                </div>
                                <div className="card_body_thread">
                                    <div>{item.content}</div>
                                </div>
                                <span>{item.creation_date}</span>
                            </div>

                        </>
                    ))}

                </div>
            </div>

        </>
    )
}