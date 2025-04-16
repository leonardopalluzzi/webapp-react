export default function CommentsUi({ username, text, vote, id }) {

    return (

        <>
            <h1>{id}</h1>
            <h1>{username}</h1>
            <span>{text}</span>
            <span>{vote}</span>
        </>
    )
}