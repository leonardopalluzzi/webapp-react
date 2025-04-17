export default function CommentFormUi({ starsNumber, setStarsNumber, onMouseHover, setOnMouseOver, onClickRating, onSubmit, onChange, newComment, submitEsit }) {
    function renderStars(index) {

        let starValue = 0



        const stars = Array.from({ length: index }).map((item, i) => {
            { starValue++ }
            console.log(starValue);
            const myId = starValue
            return (
                <>
                    <a onMouseEnter={() => setStarsNumber(myId)} onMouseLeave={() => setStarsNumber(0)} className="btn btn-transparent text-white">
                        <i class="bi bi-star-fill"></i>

                    </a>
                </>
            )


        })

        const emptyStars = Array.from({ length: 5 - index }).map((item, i) => {
            { starValue++ }
            const myId = starValue
            console.log(starValue);
            return (
                <>
                    <a onMouseEnter={() => setStarsNumber(myId)} onMouseLeave={() => setStarsNumber(0)} className="btn btn-transparent text-white">
                        <i class="bi bi-star"></i>
                    </a>
                </>
            )

        })

        return (
            <>
                {stars}
                {emptyStars}

            </>
        )
    }


    return (
        <>

            <form onSubmit={(e) => { e.preventDefault(); onSubmit() }} method="POST">
                <h2>Leave a review</h2>
                <h5>Set Rating:</h5>
                <span>{renderStars(starsNumber)}</span>
                <textarea className="form-control my-4" placeholder="Write your review here" onChange={(e) => onChange(e.target.value)} type="text" value={newComment} />
                <div className={submitEsit.state == 'error' ? 'd-block text-danger' : 'text-success'}>
                    <h5>{submitEsit.state}</h5>
                    <span>{submitEsit.message}</span>
                </div>
                <button type="submit" className="btn btn-primary">Post Review</button>
            </form >
        </>
    )
}