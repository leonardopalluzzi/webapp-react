import CommentFormUi from "../dumb/CommentForm.ui"
import { useState } from 'react'
import { useParams } from "react-router-dom";

export default function CommentForm() {

    const { id } = useParams()
    console.log(id);


    const [newComment, setNewComment] = useState('')

    function handleSubmit() {
        console.log('submit');

        const comment = {
            movieId: Number(id),
            name: 'pippo',
            text: newComment,
            vote: 4
        }

        fetch(`http://localhost:3000/api/v1/movies/comments`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(comment)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);

                handleCommentsFetch()
            })
            .catch(err => console.error(err))
        setNewComment('')
    }

    function handleChange(value) {
        setNewComment(value)
    }

    function handleCommentsFetch() {
        fetch(`http://localhost:3000/api/v1/movies/comments/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
            .catch(err => console.error(err))
    }



    return (
        <>
            <CommentFormUi
                onSubmit={handleSubmit}
                onChange={handleChange}
                newComment={newComment}
            />
        </>
    )
}