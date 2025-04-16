export default function CommentsUi({ username, text, vote, id }) {

    return (

        <>
            <div className="card_comments">
                <h1>{id}</h1>
                <h1>{username}</h1>
                <span>{text}</span>
                <span>{vote}</span>
            </div>

        </>
    )
}