import { Outlet } from 'react-router-dom'
import Header from '../components/smart/Header.jsx'
import Footer from '../components/dumb/Footer.ui.jsx'

export default function DefaultLayout() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />

        </>
    )
}