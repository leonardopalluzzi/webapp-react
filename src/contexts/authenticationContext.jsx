import { createContext, useContext, useState } from 'react'

const AuthContext = createContext()

function AuthProvider({ children }) {

    const [userLogged, setUserLogged] = useState(false)
    const [signUpEsit, setSignUpEsit] = useState({
        state: 'success',
        message: ''
    })
    const [loginEsit, setLoginEsit] = useState(false)

    function fetchRegister(newUser) {
        fetch('http://localhost:3000/api/v1/movies/users/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newUser)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setSignUpEsit(data)
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
                setUserLogged(true)
                setLoginEsit(data)
            })
            .catch(err => {
                console.error(err)
            })
    }

    function logout() {
        localStorage.removeItem('token')
        setUserLogged(false)
    }

    function checkIfLoggedOnRefresh() {
        const token = localStorage.getItem('token')
        if (token) {
            setUserLogged(true)
        }
    }

    return (
        <>
            <AuthContext.Provider value={{ loginEsit, signUpEsit, userLogged, checkIfLoggedOnRefresh, fetchRegister, fetchLogin, logout }}>
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