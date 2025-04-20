import { useParams } from "react-router-dom"
import useMovieShow from "../hooks/useMovieShow";

export default function Edit() {

    const { singleMovie } = useMovieShow()

    const { id } = useParams()
    console.log(id);

    switch (singleMovie.state) {
        case 'loading':
            return (
                <>
                    <h1>loading</h1>
                </>
            )
    }


    return (
        <>
            <h1>edit page</h1>
        </>
    )
}