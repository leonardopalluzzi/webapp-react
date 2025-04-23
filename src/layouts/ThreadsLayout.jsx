import { Outlet } from 'react-router-dom'
import Aside from '../components/smart/Aside.jsx'
import HeaderThreads from '../components/smart/HeaderThreads.jsx'

export default function ThreadsLayout() {
    return (
        <>
            <HeaderThreads />
            <div className="threads_layout">
                <div className="col-2 position-relative">
                    <Aside />
                </div>
                <div className="col-10 threads_main">
                    <Outlet />
                </div>
            </div>
        </>
    )
}