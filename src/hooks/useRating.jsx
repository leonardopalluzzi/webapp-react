export default function useRating({ rating }) {
    const fullStars = [];
    const emptyStars = [];
    for (let i = 0; i < rating; i++) {
        fullStars.push(
            <>
                <span><i className="bi bi-star-fill"></i></span>
            </>
        )
    }
    for (let i = rating; i < 5; i++) {
        emptyStars.push(
            <>
                <span><i className="bi bi-star"></i></span >
            </>
        )
    }

    const stars = [...fullStars, ...emptyStars]


    return { stars }
}