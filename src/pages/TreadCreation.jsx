import TreadCreationUi from "../components/dumb/TreadCreation.ui"
import { useParams } from "react-router-dom"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function TreadCreation() {

    const navigate = useNavigate()

    const { id } = useParams()

    const [threadTitle, setTreadTitle] = useState('')

    const user = JSON.parse(localStorage.getItem('user'))

    function handleOnChange(value) {
        setTreadTitle(value)
    }

    function handleSubmit() {
        console.log('submit');

        const newThread = {
            movieId: id,
            title: threadTitle,
        }

        fetch('http://localhost:3000/api/v1/threads', {
            method: 'POST',
            headers: {
                'Content-Type': 'Application/json',
                'Authorization': `Bearer ${user.token}`
            },
            body: JSON.stringify(newThread)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.state == 'success') {
                    redirect()
                }

            })
            .catch(err => console.error(err))

        setTreadTitle('')
        //navigate('/threads')
    }

    function redirect() {
        navigate('/threads')
    }

    return (
        <>
            <TreadCreationUi
                onSubmit={handleSubmit}
                onChange={handleOnChange}
                threadName={user.username}
                title={threadTitle}
            />
        </>
    )
}