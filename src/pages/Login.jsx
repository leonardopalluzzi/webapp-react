import { useState } from 'react'
import { useAuthContext } from '../contexts/authenticationContext'
import LoginFormUi from '../components/dumb/LoginForm.ui'

export default function Login() {

    const { fetchLogin, loginEsit } = useAuthContext()
    const redirect = '/'

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
        // setUsername('')
        // setPassword('')
    }

    return (
        <>
            <LoginFormUi
                redirect={redirect}
                esit={loginEsit}
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