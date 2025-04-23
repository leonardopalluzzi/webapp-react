import CommentsSectionUi from "../dumb/CommentsSection.ui"
import CommentForm from "./CommentForm"

export default function CommentsSection({ comments, onCommentAdded }) {

    if (comments.length == 0) {
        return (
            <>
                <h4>No comments yet...</h4>
                <div>
                    <CommentForm onCommentAdded={onCommentAdded} />
                </div>
            </>
        )
    } else {
        return (
            <>
                <ul className="list-unstyled comments_section">
                    <h3>Reviews:</h3>
                    {comments.map(item => (
                        <CommentsSectionUi

                            key={item.id}
                            username={item.name}
                            content={item.text}
                            rating={item.vote}
                        />
                    ))}
                </ul>
                <div>
                    <CommentForm onCommentAdded={onCommentAdded} />
                </div>


            </>
        )
    }

}