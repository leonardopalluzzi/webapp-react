import { useState, useEffect } from 'react'
import { useAuthContext } from '../contexts/authenticationContext'

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
            <div className="container">
                <h1>Register page</h1>

                <form onSubmit={(e) => { e.preventDefault(); handleSubmit() }} method="POST">
                    <input value={username} onChange={(e) => handleUsername(e.target.value)} className="form-control" type="text" placeholder="username" />
                    <input value={password} onChange={(e) => handlePassword(e.target.value)} className="form-control" type="text" placeholder="password" />
                    <button button type="submit" className="btn btn-primary" > Register</button>
                </form>
            </div >

        </>
    )
}