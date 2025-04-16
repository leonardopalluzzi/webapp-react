import { createContext, useContext, useState } from 'react'

const AuthContext = createContext()

function AuthProvider({ children }) {
    const [state, setState] = useState({
        state: 'loading'
    })



    function fetchRegister(newUser) {
        fetch('http://localhost:3000/api/v1/movies/users', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newUser)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
            .cathc(err => {
                console.error(err)
            })
    }

    function fetchLogin(user) {
        fetch('http://localhost:3000/api/v1/movies/users', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
            .cathc(err => {
                console.error(err)
            })
    }

    return (
        <>
            <AuthContext.Provider value={{ state, fetchRegister, fetchLogin }}>
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