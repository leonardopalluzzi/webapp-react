import MessageFormUi from "./MessageForm.ui"
import { useNavigate } from "react-router-dom"
import ThreadsMessageUi from "./ThreadsMessage.ui"

export default function ThreadDetailsUi({ submitEsit, newMessage, onChange, onSubmit, threadTitle, threadCreationDate, threadCreator, movieTitle, movieReleaseYear, movieImage, movieGenre, movieDirector, movieDescription, messages }) {
    const navigate = useNavigate()
    return (
        <>
            <div className="container my-5 py-5">
                <button onClick={() => navigate(-1)} className="btn btn-light"><i class="bi bi-arrow-bar-left"></i> Back</button>
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
                            <ThreadsMessageUi
                                username={item.username}
                                content={item.content}
                                creation_date={item.creation_date}
                            />
                        </>
                    ))}

                </div>
            </div>

        </>
    )
}