import ListUi from "../dumb/List.ui"
import { useEffect } from "react"
import { useState } from "react"
import Error from "../../pages/Error"

export default function ThreadsList() {

    const [threads, setThreads] = useState({
        state: 'loading'
    })

    useEffect(() => {
        fetch('http://localhost:3000/api/v1/threads')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setThreads({
                    state: 'success',
                    threadsList: data
                })

            })
            .catch(err => {
                console.log(err);
                setThreads({
                    state: 'error',
                    message: err.message
                })

            })
    }, [])


    switch (threads.state) {
        case 'loading':
            return (
                <>
                    <h1>Loading...</h1>
                </>
            )
        case 'error':
            return (
                <Error state={threads.state} message={threads.message} />
            )
        case 'success':
            return (
                <>
                    <ListUi data={threads.threadsList} title={'Threads List'} path={'thread'} />
                </>
            )
    }
}