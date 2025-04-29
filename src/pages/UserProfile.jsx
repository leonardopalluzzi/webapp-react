import UserProfileUi from '../components/dumb/UserProfile/UserProfile.ui'
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react";
import Error from "./Error";

export default function UserProfile() {

    const { id } = useParams()
    console.log(id);

    const [userInfo, setUserInfo] = useState({
        state: 'loading'
    })

    useEffect(() => {

        const user = JSON.parse(localStorage.getItem('user'))

        fetch(`http://localhost:3000/api/v1/users/${id}`, {
            headers: {
                'Content-Type': 'Application/json',
                'Authorization': `Bearer ${user.token}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setUserInfo({
                    state: 'success',
                    userData: data
                })

            })
            .catch(err => {
                console.error(err);
                setUserInfo({
                    state: 'error',
                    message: err.message
                })

            })
    }, [])

    switch (userInfo.state) {
        case 'loading':
            return (
                <>
                    <h1>Loading...</h1>
                </>
            )
        case 'error':
            return (
                <>
                    <Error state={userInfo.satate} message={userInfo.message} />
                </>
            )
        case 'success':
            return (
                <>
                    <UserProfileUi
                        username={userInfo.userData.username}
                        user_threads={userInfo.userData.user_threads}
                        user_messages={userInfo.userData.user_messages}
                    />
                </>
            )
    }
}