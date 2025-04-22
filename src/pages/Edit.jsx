import { useParams } from "react-router-dom"
import { useState, useEffect } from 'react'
import useMovieShow from "../hooks/useMovieShow";
import Error from './Error'
import EditMovieUi from "../components/dumb/EditMovie.ui";
import { useAuthContext } from "../contexts/authenticationContext";

export default function Edit() {

    const { signUpEsit } = useAuthContext()

    const { id } = useParams()
    const { singleMovie } = useMovieShow({ id })

    const [movieChanges, setMovieChanges] = useState({
        title: '',
        director: '',
        genre: '',
        lastUpdate: '',
        content: '',
        image: ''
    })

    useEffect(() => {
        if (singleMovie.state === 'success') {
            setMovieChanges({
                id: singleMovie.movie.id,
                title: singleMovie.movie.title,
                director: singleMovie.movie.director,
                genre: singleMovie.movie.genre,
                lastUpdate: singleMovie.movie.updated_at,
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

        const changedMovie = {
            ...movieChanges,
            isAdmin: signUpEsit.role
        }

        console.log(changedMovie);

        fetch(`http://localhost:3000/api/v1/movies/${singleMovie.movie.id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'Application/json' },
            body: JSON.stringify(changedMovie)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);

            })
            .catch(err => console.error(err))
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
                        releaseYear={singleMovie.movie.releaseYear}
                        lastUpdate={movieChanges.lastUpdate}
                        creationDate={singleMovie.movie.created_at}
                        content={movieChanges.content}
                        image={movieChanges.image}
                        onChange={handleChange}
                        onSubmit={handleSubmit}
                    />
                </>
            )
    }
}