import ListUi from "../dumb/List.ui"
import Error from "../../pages/Error"
import { useThreadContext } from "../../contexts/threadsContext"

export default function ThreadsList() {

    const { threads } = useThreadContext()

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