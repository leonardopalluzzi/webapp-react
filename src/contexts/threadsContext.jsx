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




    return (
        <ThreadContext.Provider value={{ threads }}>
            {children}
        </ThreadContext.Provider>
    )
}

function useThreadContext() {
    const context = useContext(ThreadContext)
    return context
}

export { ThreadProvider, useThreadContext }