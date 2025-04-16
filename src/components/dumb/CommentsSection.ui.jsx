export default function CommentsSectionUi({ username, content, rating }) {
    return (
        <>
            <li>
                <div className="card p-4">
                    <h4>{username}</h4>
                    <p>{content}</p>
                    <span>{rating}</span>
                </div>

            </li>
        </>
    )
}