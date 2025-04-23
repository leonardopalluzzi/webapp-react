import ThreadDetailsUi from "../components/dumb/ThreadDetails.ui"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import Error from "./Error"

export default function Thread() {

    const { id } = useParams()

    const [thread, setThread] = useState({
        state: 'loading'
    })

    const [newMessage, setNewMessage] = useState('')

    useEffect(() => {
        fetch(`http://localhost:3000/api/v1/threads/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setThread({
                    state: 'success',
                    results: data
                })

            })
            .catch(err => {
                console.error(err)
                setThread({
                    state: 'error',
                    message: err.message
                })
            })
    }, [])

    function handleChange(value) {
        setNewMessage(value)
    }

    function handleSubmit() {
        console.log('submit');

        fetch('', {
            method: 'POST'
        })

    }

    switch (thread.state) {
        case 'loading':
            return (
                <>
                    <h1>Loading...</h1>
                </>
            )
        case 'error':
            return (
                <>
                    <Error state={thread.state} message={thread.message} />
                </>
            )
        case 'success':
            return (
                <>
                    <ThreadDetailsUi
                        threadTitle={thread.results.thread_title}
                        threadCreationDate={thread.results.thread_creation_date}
                        threadCreator={thread.results.thread_author}
                        movieTitle={thread.results.movie_title}
                        movieReleaseYear={thread.results.movie_release_year}
                        movieImage={thread.results.movie_image}
                        movieGenre={thread.results.movie_genre}
                        movieDirector={thread.results.movie_director}
                        movieDescription={thread.results.movie_description}
                        messages={thread.results.messages}
                        newMessage={newMessage}
                        onChange={handleChange}
                        onSubmit={handleSubmit}
                    />
                </>
            )
    }
}