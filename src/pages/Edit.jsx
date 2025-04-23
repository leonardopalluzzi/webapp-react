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
                image: ''
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
        const user = JSON.parse(localStorage.getItem('user'))

        const formToSend = new FormData();

        formToSend.append('title', movieChanges.title)
        formToSend.append('director', movieChanges.director)
        formToSend.append('genre', movieChanges.genre)
        formToSend.append('lastUpdate', movieChanges.lastUpdate)
        formToSend.append('content', movieChanges.content)
        formToSend.append('image', movieChanges.image)

        console.log(movieChanges);


        fetch(`http://localhost:3000/api/v1/movies/${singleMovie.movie.id}`, {
            method: 'PATCH',
            headers: {
                'Authorization': `Bearer ${user.token}`
            },
            body: formToSend
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
                        releaseYear={singleMovie.movie.release_year}
                        lastUpdate={movieChanges.lastUpdate}
                        creationDate={singleMovie.movie.created_at}
                        content={movieChanges.content}
                        image={singleMovie.movie.image}
                        onChange={handleChange}
                        onSubmit={handleSubmit}
                    />
                </>
            )
    }
}