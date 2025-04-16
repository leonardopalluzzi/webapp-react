export default function CommentsUi({ username, text, vote, id }) {

    return (

        <>
            <div>
                <div className="card-header">
                    <h5>{username} says:</h5>
                </div>
                <div className="card-body">
                    <p>{text}</p>
                    <span>Vote: {vote}</span>
                </div>
            </div>

        </>
    )
}