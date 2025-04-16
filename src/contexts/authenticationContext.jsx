import { createContext, useContext, useState } from 'react'

const AuthContext = createContext()

function AuthProvider({ children }) {

    const [state, setState] = useState(false)

    function fetchRegister(newUser) {
        fetch('http://localhost:3000/api/v1/movies/users/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newUser)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
            .catch(err => {
                console.error(err)
            })
    }

    function fetchLogin(user) {
        fetch('http://localhost:3000/api/v1/movies/users/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                localStorage.setItem('token', data.token);
                setState(true)
            })
            .catch(err => {
                console.error(err)
            })
    }

    function logout() {
        localStorage.removeItem('token')
        setState(false)
    }

    return (
        <>
            <AuthContext.Provider value={{ state, fetchRegister, fetchLogin, logout }}>
                {children}
            </AuthContext.Provider>
        </>
    )
}

function useAuthContext() {
    const context = useContext(AuthContext)
    return context
}

export { AuthProvider, useAuthContext }