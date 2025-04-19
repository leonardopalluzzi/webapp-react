import MoviesTable from "../components/smart/MoviesTable"
import { useAuthContext } from "../contexts/authenticationContext"


export default function Dashboard() {

    const { loginEsit } = useAuthContext()
    console.log(loginEsit);

    switch (loginEsit.role) {
        case 1:
            return (
                <>
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