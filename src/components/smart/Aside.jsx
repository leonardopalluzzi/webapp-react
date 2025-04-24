import AsideNotLoggedUi from "../dumb/AsideNotLogged.ui"
import AsideLoggedUi from "../dumb/AsideLogged.ui"
import AsideAdminUi from "../dumb/AsideAdmin.ui"

export default function Aside() {

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
                <AsideLoggedUi />
            </>
        )
    } else if (user.role == 1) {
        return (
            <>
                <AsideAdminUi />
            </>
        )
    }
}