import { useMovieContext } from '../../contexts/movieContext'
import ListUi from '../dumb/List.ui'
import Error from '../../pages/Error'

export default function List() {


    const { movies } = useMovieContext()

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
                    <Error state={movies.state} message={movies.message} />
                </>
            )
        case 'success':
            return (
                <>
                    <ListUi data={movies.movies} />
                </>
            )
    }
}