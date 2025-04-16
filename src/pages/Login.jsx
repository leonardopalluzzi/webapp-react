import { useState } from 'react'
import { useAuthContext } from '../contexts/authenticationContext'
import UserFormPublicUi from '../components/dumb/UserFormPublic.ui'

export default function Login() {

    const { fetchLogin } = useAuthContext()

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    function handleUsername(user) {
        setUsername(user)
    }
    function handlePassword(pass) {
        setPassword(pass)
    }

    function handleSubmit() {
        const user = {
            username: username,
            password: password
        }
        fetchLogin(user)
        setUsername('')
        setPassword('')
    }

    return (
        <>
            <UserFormPublicUi
                button={'Login'}
                title={'Login Form'}
                onSubmit={handleSubmit}
                onChangeUsername={handleUsername}
                onChangePassword={handlePassword}
                username={username}
                password={password}
            />
        </>
    )
}