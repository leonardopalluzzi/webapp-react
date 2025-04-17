import CommentFormUi from "../dumb/CommentForm.ui"
import { useState } from 'react'
import { useParams } from "react-router-dom";
import { useAuthContext } from "../../contexts/authenticationContext";
import RegisterPopUpUi from "../dumb/RegisterPopUp.ui";

export default function CommentForm({ onCommentAdded }) {

    const { userLogged } = useAuthContext()
    const [visible, setVisible] = useState(false)
    const [sendComment, setSendComment] = useState({
        state: '',
        message: ''
    })

    const { id } = useParams()

    const [newComment, setNewComment] = useState('')

    function handleSubmit() {
        console.log('submit');

        if (userLogged == false) {
            console.log('not logged');
            setVisible(true)
            return
        }

        const comment = {
            movieId: Number(id),
            name: '',
            text: newComment,
            vote: 4
        }

        console.log(comment.text.length);


        if (comment.text == '') {
            setSendComment({
                state: 'error',
                message: 'Please fill the required fields'
            })
            return
        } else if (comment.text.length < 5 || comment.text.length > 300) {
            setSendComment({
                state: 'error',
                message: 'Your review should be a minimum of 5 characters and a maximum of 300'
            })
            return
        }

        const token = localStorage.getItem('token');

        fetch(`http://localhost:3000/api/v1/movies/comments`, {
            method: 'POST',
            headers:
            {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(comment)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                onCommentAdded()
                setSendComment({
                    state: 'success',
                    message: 'Review posted correctly'
                })
            })
            .catch(err => console.error(err))
        setNewComment('')
    }

    function handleChange(value) {
        setNewComment(value)
    }

    return (
        <>
            <div className={`${visible == true ? "d-block" : 'd-none'} popup_container`}>
                <RegisterPopUpUi setVisible={setVisible} />
            </div>
            <CommentFormUi
                submitEsit={sendComment}
                onSubmit={handleSubmit}
                onChange={handleChange}
                newComment={newComment}
            />
        </>
    )
}