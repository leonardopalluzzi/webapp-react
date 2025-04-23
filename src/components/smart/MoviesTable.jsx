import MoviesTableUi from "../dumb/MoviesTable.ui"
import { useMovieContext } from '../../contexts/movieContext'
import Error from '../../pages/Error'
import AddMovieForm from "./AddMovieForm"

export default function MoviesTable() {


    const { movies } = useMovieContext()
    console.log(movies);

    function handleDelete(id) {
        console.log(id);


        const user = JSON.parse(localStorage.getItem('user'))
        console.log(user.token);


        fetch(`http://localhost:3000/api/v1/movies/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.token}`
            }
        })
            .then(res => res)
            .then(data => {
                console.log(data);

            })
            .catch(err => console.error(err))
    }

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
                    <AddMovieForm />
                    <MoviesTableUi data={movies.movies} onDelete={handleDelete} />

                </>
            )
    }
}