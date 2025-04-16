import { useState } from 'react'
import { useAuthContext } from '../contexts/authenticationContext'
import UserFormPublicUi from '../components/dumb/UserFormPublic.ui'

export default function Register() {

    const { fetchRegister } = useAuthContext()

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    function handleUsername(user) {
        setUsername(user)
    }
    function handlePassword(pass) {
        setPassword(pass)
    }

    function handleSubmit() {
        const newUser = {
            username: username,
            password: password
        }
        fetchRegister(newUser)
        setUsername('')
        setPassword('')
    }

    return (
        <>
            <UserFormPublicUi
                button={'Register'}
                title={'Register Form'}
                onSubmit={handleSubmit}
                onChangeUsername={handleUsername}
                onChangePassword={handlePassword}
                username={username}
                password={password}
            />
        </>
    )
}