import useRating from "../../hooks/useRating"

export default function CommentsSectionUi({ username, content, rating }) {
    const { stars } = useRating({ rating })

    return (
        <>
            <li>
                <div className="comment_card p-4">
                    <h4>{username}</h4>
                    <p>{content}</p>
                    <span>{stars}</span>
                </div>

            </li>
        </>
    )
}