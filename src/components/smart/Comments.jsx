import useMovieShow from "../../hooks/useMovieShow";
import CommentsUi from "../dumb/Comments.ui";
import { useState, useEffect } from 'react'
import Error from "../../pages/Error";

export default function Comments({ id }) {

    const { singleMovie } = useMovieShow({ id })

    const [index, setIndex] = useState(1)

    useEffect(() => {

        if (singleMovie.state !== 'success') {
            return;
        }

        const timer = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % singleMovie.movie.reviews.length)
        }, 4000)

        return () => clearInterval(timer)
    }, [singleMovie])


    switch (singleMovie.state) {
        case 'loading':
            return (
                <>
                    <h1>Loading...</h1>
                </>
            )
        case 'error':
            return (
                <>
                    <Error state={movies.state} message={movies.message} />
                </>
            )
        case 'success':
            return (
                <>
                    {
                        <div className="card_comments">
                            <CommentsUi
                                username={singleMovie.movie.reviews[index].name}
                                text={singleMovie.movie.reviews[index].text}
                                rating={singleMovie.movie.reviews[index].vote}
                            />
                        </div>
                    }

                </>
            )
    }
}