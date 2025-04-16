import CommentsSectionUi from "../dumb/CommentsSection.ui"
import CommentForm from "./CommentForm"

export default function CommentsSection({ comments }) {



    if (comments.length == 0) {
        return (
            <>
                <h4>No comments yet...</h4>
            </>
        )
    } else {
        return (
            <>
                <ul className="list-unstyled">
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
                    <CommentForm />
                </div>


            </>
        )
    }

}