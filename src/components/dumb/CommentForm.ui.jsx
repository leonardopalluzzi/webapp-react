export default function CommentFormUi({ onSubmit, onChange, newComment }) {
    return (
        <>
            <form onSubmit={(e) => { e.preventDefault(); onSubmit() }} method="POST">
                <input onChange={(e) => onChange(e.target.value)} type="text" value={newComment} />
                <button type="submit" className="btn btn-primary">Post Comment</button>
            </form>
        </>
    )
}