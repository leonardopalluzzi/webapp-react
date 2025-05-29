import { createContext, useContext, useState, useEffect } from "react";


const ThreadContext = createContext()

function ThreadProvider({ children }) {

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

    function triggerThreadsFetch() {
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
    }



    function deleteThread(itemId) {
        fetch(`http://localhost:3000/api/v1/threads/${itemId}`, {
            method: 'DELETE',
            // headers: {
            //     'Content-type': 'application/json'
            // }
        })
            // .then(res => res.json())
            .then(data => {
                console.log(data);
                triggerThreadsFetch()

            })
            .catch(err => {
                console.error(err.message);
            })
    }


    return (
        <ThreadContext.Provider value={{ threads, deleteThread }}>
            {children}
        </ThreadContext.Provider>
    )
}

function useThreadContext() {
    const context = useContext(ThreadContext)
    return context
}

export { ThreadProvider, useThreadContext }