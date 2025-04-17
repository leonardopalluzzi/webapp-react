export default function CommentFormUi({ onClickRating, onSubmit, onChange, newComment, submitEsit }) {
    return (
        <>
            <form onSubmit={(e) => { e.preventDefault(); onSubmit() }} method="POST">
                <h2>Leave a review</h2>
                <textarea className="form-control my-4" placeholder="Write your review here" onChange={(e) => onChange(e.target.value)} type="text" value={newComment} />
                <h5>Set Rating:</h5>
                <span>{
                    Array.from({ length: 5 }).map((item, i) => (
                        <>
                            <a onClick={() => onClickRating(i)} className="btn btn-transparent text-white">
                                <i i class="bi bi-star"></i>
                            </a>
                        </>

                    ))

                }</span>
                <div className={submitEsit.state == 'error' ? 'd-block text-danger' : 'text-success'}>
                    <h5>{submitEsit.state}</h5>
                    <span>{submitEsit.message}</span>
                </div>
                <button type="submit" className="btn btn-primary">Post Review</button>
            </form >
        </>
    )
}