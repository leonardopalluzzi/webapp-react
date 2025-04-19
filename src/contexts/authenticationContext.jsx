import { createContext, useContext, useEffect, useState } from 'react'

const AuthContext = createContext()

function AuthProvider({ children }) {

    const [userLogged, setUserLogged] = useState(false)
    const [signUpEsit, setSignUpEsit] = useState({
        state: 'success',
        message: ''
    })
    const [loginEsit, setLoginEsit] = useState({
        state: 'loading'
    })

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem('user'))
        if (storedUser) {
            setLoginEsit(storedUser)
            setUserLogged(true)
        }
    }, [])

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
                const user = {
                    token: data.token,
                    role: data.role
                }
                localStorage.setItem('user', JSON.stringify(user));
                setUserLogged(true)
                setLoginEsit({
                    state: 'success',
                    role: data.role
                })
            })
            .catch(err => {
                console.error(err)
            })
    }

    function logout() {
        localStorage.removeItem('token')
        setUserLogged(false)
    }

    return (
        <>
            <AuthContext.Provider value={{ loginEsit, signUpEsit, userLogged, fetchRegister, fetchLogin, logout }}>
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