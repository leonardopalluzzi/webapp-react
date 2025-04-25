import { useDashboardContext } from "../../contexts/dashboardContext"

export default function DashboardDisplayUi() {

    const { setDisplay } = useDashboardContext()

    return (
        <>
            <div className="container dashborad_container">
                <h5>Select the Dashboard:</h5>
                <button onClick={() => setDisplay(0)} className="btn btn-primary">Movies</button>
                <button onClick={() => setDisplay(1)} className="btn btn-primary mx-4">Threads</button>
            </div>
        </>
    )
}