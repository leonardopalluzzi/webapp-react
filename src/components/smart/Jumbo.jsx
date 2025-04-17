import JumboUi from "../dumb/Jumbo.ui.jsx";
import Comments from "./Comments.jsx";
import { useMovieContext } from '../../contexts/movieContext.jsx';
import { useState, useEffect } from 'react'
import Error from "../../pages/Error.jsx";

export default function Jumbo() {


    const { movies } = useMovieContext()
    const [index, setIndex] = useState(1)


    useEffect(() => {
        if (movies.state !== 'success' || !movies.movies || movies.movies.length == 0) {
            return
        }

        const timer = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % movies.movies.length)
        }, 10000)

        return () => clearInterval(timer)
    }, [movies])


    switch (movies.state) {
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
            //fare map, creare commenti container, pasare id dal map e chiamare hook per fetch show
            return (
                <>
                    <JumboUi
                        title={movies.movies[index].title}
                        image={movies.movies[index].image}
                        content={movies.movies[index].abstract}
                    />


                    <Comments id={index} />

                </>


            )
    }
}