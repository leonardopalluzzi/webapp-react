
import MoviesTable from "../components/smart/MoviesTable"
import { useAuthContext } from "../contexts/authenticationContext"


export default function Dashboard() {

    const { loginEsit } = useAuthContext()
    console.log(loginEsit);

    switch (loginEsit.role) {
        case 1:
            return (
                <>
                    <h1>dashboard</h1>
                    <MoviesTable />
                </>
            )
        case 0:
            return (
                <>
                    <h1>non sei admin</h1>
                </>
            )
    }


}