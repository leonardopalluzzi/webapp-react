import { useMovieContext } from '../../contexts/movieContext'
import ListUi from '../dumb/List.ui'

export default function List() {


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
                    <h1>error</h1>
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