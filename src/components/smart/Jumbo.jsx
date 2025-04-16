import JumboUi from "../dumb/Jumbo.ui.jsx";
import Comments from "./Comments.jsx";
import CarouselUi from "../dumb/Carousel.ui.jsx";
import { useMovieContext } from '../../contexts/movieContext.jsx';
import { useState } from 'react'

export default function Jumbo() {


    const { movies } = useMovieContext()
    const [currentId, setCurrentId] = useState(1)

    function handleId(itemId) {
        setCurrentId(itemId)
    }


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
                    <CarouselUi length={movies.movies.length} content={
                        <>
                            {
                                movies.movies.map(item => (
                                    <JumboUi
                                        onIdChange={() => andleId(item.id)}
                                        key={item.id}
                                        image={item.image}
                                        title={item.title}
                                        content={item.abstract}
                                        comments={
                                            <>
                                                {/* <CarouselUi content={
                                                    <>
                                                        {

                                                            <Comments id={item.id} />

                                                        }
                                                    </>
                                                } /> */}
                                            </>
                                        }
                                    />
                                ))
                            }
                        </>
                    } />

                    <CarouselUi title={'comments'} content={
                        <>
                            <div className="jumbo_info">
                                {

                                    <Comments id={currentId} />

                                }
                            </div>

                        </>
                    } />

                </>


            )
    }
}