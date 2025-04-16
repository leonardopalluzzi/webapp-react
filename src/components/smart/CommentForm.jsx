import CommentFormUi from "../dumb/CommentForm.ui"
import { useState } from 'react'

export default function CommentForm() {

    const [newComment, setNewComment] = useState('')

    function handleSubmit() {
        console.log('submit');


    }

    function handleChange(value) {
        setNewComment(value)
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