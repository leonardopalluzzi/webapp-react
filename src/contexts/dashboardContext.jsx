import { createContext, useContext, useState } from "react";

const DashboardContext = createContext()

function DashboardProvider({ children }) {

    const [display, setDisplay] = useState(0)

    return (
        <>
            <DashboardContext.Provider value={{ display, setDisplay }}>
                {children}
            </DashboardContext.Provider>
        </>
    )
}

function useDashboardContext() {
    const context = useContext(DashboardContext)
    return context
}

export { DashboardProvider, useDashboardContext }