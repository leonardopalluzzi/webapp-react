import useMovieShow from '../hooks/useMovieShow'
import MovieDetailsUi from "../components/dumb/MovieDetails.ui";
import CommentsSection from "../components/smart/CommentsSection";
import { useParams } from 'react-router-dom';

export default function Movie() {

    const { id } = useParams()

    const { singleMovie } = useMovieShow({ id });
    console.log(singleMovie);


    switch (singleMovie.state) {
        case 'loading':
            return (
                <>
                    <h1>lodaing...</h1>
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
                    <MovieDetailsUi
                        title={singleMovie.movie.title}
                        image={singleMovie.movie.image}
                        content={singleMovie.movie.abstract}
                        comments={<CommentsSection comments={singleMovie.movie.reviews} />}
                    />
                </>
            )
    }
}