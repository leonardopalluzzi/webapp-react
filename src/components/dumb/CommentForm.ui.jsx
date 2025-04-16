export default function CommentFormUi({ onSubmit, onChange, newComment }) {
    return (
        <>
            <form onSubmit={(e) => { e.preventDefault(); onSubmit() }} method="POST">
                <h2>Leave a review</h2>
                <textarea className="form-control my-4" placeholder="Write your review here" onChange={(e) => onChange(e.target.value)} type="text" value={newComment} />
                <button type="submit" className="btn btn-primary">Post Review</button>
            </form>
        </>
    )
}