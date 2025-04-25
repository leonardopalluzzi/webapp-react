import MoviesTable from "../components/smart/MoviesTable"
import { useAuthContext } from "../contexts/authenticationContext"
import { useDashboardContext } from '../contexts/dashboardContext.jsx'
import ThreadsTable from '../components/smart/ThreadsTable.jsx'
import DashboardDisplayUi from '../components/dumb/DashboardDisplay.ui.jsx'

export default function Dashboard() {

    const { display } = useDashboardContext()

    const { loginEsit } = useAuthContext()

    switch (loginEsit.role) {
        case 1:
            switch (display) {
                case 0:
                    return (
                        <>
                            <DashboardDisplayUi />
                            <MoviesTable />
                        </>
                    )
                case 1:
                    return (
                        <>
                            <DashboardDisplayUi />
                            <ThreadsTable />
                        </>
                    )
            }

        case 0:
            return (
                <>
                    <h1>You are not admin</h1>
                </>
            )
    }


}