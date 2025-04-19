import { useAuthContext } from '../../contexts/authenticationContext'
import HeaderNotLoggedUi from '../dumb/HeaderNotLogged.ui'
import HeaderLoggedUi from '../dumb/HeaderLogged.ui'
import HeaderAdminUi from '../dumb/HeaderAdmin.ui'

export default function Header() {
    const { userLogged, logout, loginEsit } = useAuthContext()

    if (userLogged && loginEsit.role == 1) {
        return (
            <>
                <HeaderAdminUi logout={logout} />
            </>
        )
    }

    switch (userLogged) {
        case false:
            return (
                <>
                    <HeaderNotLoggedUi />
                </>
            )
        case true:
            return (
                <>
                    <HeaderLoggedUi logout={logout} />
                </>
            )
    }
}