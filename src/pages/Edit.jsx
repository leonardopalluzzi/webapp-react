import { useParams } from "react-router-dom"
import { useState, useEffect } from 'react'
import useMovieShow from "../hooks/useMovieShow";
import Error from './Error'
import EditMovieUi from "../components/dumb/EditMovie.ui";

export default function Edit() {

    const { id } = useParams()
    const { singleMovie } = useMovieShow({ id })

    const [movieChanges, setMovieChanges] = useState({
        title: '',
        director: '',
        genre: '',
        releaseYear: '',
        lastUpdate: '',
        creationDate: '',
        content: '',
        image: ''
    })

    useEffect(() => {
        if (singleMovie.state === 'success') {
            setMovieChanges({
                title: singleMovie.movie.title,
                director: singleMovie.movie.director,
                genre: singleMovie.movie.genre,
                releaseYear: singleMovie.movie.release_year,
                lastUpdate: singleMovie.movie.updated_at,
                creationDate: singleMovie.movie.created_at,
                content: singleMovie.movie.abstract,
                image: singleMovie.movie.image
            })
        }

    }, [singleMovie.state, singleMovie.movie])

    function handleChange(name, value) {
        setMovieChanges({
            ...movieChanges,
            [name]: value
        })
    }

    function handleSubmit(e) {
        e.preventDefault()
        console.log('submit');


    }

    switch (singleMovie.state) {
        case 'loading':
            return (
                <>
                    <h1>loading</h1>
                </>
            )
        case 'error':
            return (
                <>
                    <Error state={singleMovie.state} message={singleMovie.message} />
                </>
            )
        case 'success':
            return (
                <>
                    <EditMovieUi
                        title={movieChanges.title}
                        director={movieChanges.director}
                        genre={movieChanges.genre}
                        releaseYear={movieChanges.releaseYear}
                        lastUpdate={movieChanges.lastUpdate}
                        creationDate={movieChanges.creationDate}
                        content={movieChanges.content}
                        image={movieChanges.image}
                        onChange={handleChange}
                        onSubmit={handleSubmit}
                    />
                </>
            )
    }
}