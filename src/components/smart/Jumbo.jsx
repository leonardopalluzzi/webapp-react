import JumboUi from "../dumb/Jumbo.ui.jsx";
import Comments from "./Comments.jsx";
import CarouselUi from "../dumb/Carousel.ui.jsx";
import { useMovieContext } from '../../contexts/movieContext.jsx';

export default function Jumbo() {


    const { movies } = useMovieContext()


    switch (movies.state) {
        case 'loading':
            return (
                <>
                    <h1>Loading...</h1>
                </>
            )
        case 'error':
            return (
                <>
                    <h1>{movies.state}</h1>
                    <span>{movies.message}</span>
                </>
            )
        case 'success':
            //fare map, creare commenti container, pasare id dal map e chiamare hook per fetch show
            return (
                <>
                    <CarouselUi title={'jumbo'} content={
                        <>
                            {
                                movies.movies.map(item => (
                                    <JumboUi
                                        key={item.id}
                                        image={item.image}
                                        title={item.title}
                                        content={item.abstract}
                                        comments={
                                            <>
                                                <CarouselUi title={'comments'} content={
                                                    <>
                                                        {

                                                            <Comments id={item.id} />

                                                        }
                                                    </>
                                                } />
                                            </>
                                        }
                                    />
                                ))
                            }
                        </>
                    } />

                    {/* <CarouselUi title={'comments'} content={
                        <>
                            {
                                movies.movies.map(item => (
                                    <Comments id={item.id} />
                                ))
                            }
                        </>
                    } /> */}

                </>


            )
    }
}