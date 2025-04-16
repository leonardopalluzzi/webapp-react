import { useRef } from "react";

export default function CarouselUi({ content, length }) {

    const scrollRef = useRef();


    function scroll(direction) {
        const { current } = scrollRef;
        const scrollAmount = 1000;

        if (direction === 'left') {
            current.scrollLeft -= scrollAmount;
        } else {
            current.scrollLeft += scrollAmount;
        }
    }

    const timer = setInterval(() => {

    })


    return (
        <>
            <div className="carousel_container">
                {content}
            </div>
        </>
    )
}