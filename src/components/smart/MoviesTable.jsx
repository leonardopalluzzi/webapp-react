import MoviesTableUi from "../dumb/MoviesTable.ui"
import { useMovieContext } from '../../contexts/movieContext'
import Error from '../../pages/Error'
export default function MoviesTable() {


    const { movies } = useMovieContext()
    console.log(movies);

    switch (movies.state) {
        case 'loading':
            return (
                <>
                    <h1>loading...</h1>
                </>
            )
        case 'error':
            return (
                <>
                    <Error />
                </>
            )
        case 'success':
            return (
                <>
                    <MoviesTableUi data={movies.movies} />
                </>
            )
    }
}