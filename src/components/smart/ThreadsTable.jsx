import ThreadsTableUi from "../dumb/ThreadsTable.ui"
import { useThreadContext } from "../../contexts/threadsContext"

export default function ThreadsTable() {

    const { threads, deleteThread } = useThreadContext()


    switch (threads.state) {
        case 'laoding':
            return (
                <>
                    <h1>Loading...</h1>
                </>
            )
        case 'error':
            return (
                <>
                    <Error state={threads.state} message={threads.message} />
                </>
            )
        case 'success':
            return (
                <>
                    <ThreadsTableUi
                        data={threads.threadsList}
                        onDelete={deleteThread}
                        user={'pippo'}
                    />
                </>
            )
    }
}