import useRating from "../../hooks/useRating"

export default function CommentsUi({ username, text, rating }) {

    const { stars } = useRating({ rating })


    return (

        <>
            <div>
                <div className="card-header">
                    <h5>{username} says:</h5>
                </div>
                <div className="card-body">
                    <p>{text}</p>
                    <span>{stars}</span>
                </div>
            </div>

        </>
    )
}