import ThreadDetailsUi from "../components/dumb/ThreadDetails.ui"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import Error from "./Error"

export default function Thread() {

    const { id } = useParams()

    const [thread, setThread] = useState({
        state: 'loading'
    })

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
                        title={thread.results.thread_title}
                        creator={thread.results.thread_author}
                        image={thread.results.movie_image}
                        messages={thread.results.message_content}
                    />
                </>
            )
    }
}