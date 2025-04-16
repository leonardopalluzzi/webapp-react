export default function CommentsUi({ username, text, vote }) {

    return (

        <>
            <div className="card_comments">
                <h1>{username}</h1>
                <span>{text}</span>
                <span>{vote}</span>
            </div>

        </>
    )
}