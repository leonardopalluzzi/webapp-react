import AsideNotLoggedUi from "../dumb/AsideNotLogged.ui"
import AsideLoggedUi from "../dumb/AsideLogged.ui"
import AsideAdminUi from "../dumb/AsideAdmin.ui"
import { useAuthContext } from '../../contexts/authenticationContext'

export default function Aside() {

    const { logout } = useAuthContext()

    const user = JSON.parse(localStorage.getItem('user'))

    if (!user) {
        return (
            <>
                <AsideNotLoggedUi />
            </>
        )
    } else if (user.role != 1) {
        return (
            <>
                <AsideLoggedUi onLogout={logout} id={user.id} />
            </>
        )
    } else if (user.role == 1) {
        return (
            <>
                <AsideAdminUi onLogout={logout} id={user.id} />
            </>
        )
    }
}