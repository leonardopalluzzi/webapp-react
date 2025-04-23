import { useEffect, useState } from 'react'

export default function useMovieShow({ id }) {
    const [refreshKey, setRefreshKey] = useState(0);


    const [singleMovie, setSingleMovie] = useState({
        state: 'loading'
    })

    const showEndpoint = `http://localhost:3000/api/v1/movies/${id}`

    function handleRefresh() {
        setRefreshKey(prevKey => prevKey + 1); // Cambia il valore per forzare il re-render
    }

    useEffect(() => {
        fetch(showEndpoint)
            .then(res => res.json())
            .then(data => {
                setSingleMovie({
                    state: 'success',
                    movie: data
                })

            })
            .catch(err => {
                console.error(err)
                setSingleMovie({
                    state: 'error',
                    message: err.message
                })
            })
    }, [refreshKey])


    return { singleMovie, handleRefresh }

}