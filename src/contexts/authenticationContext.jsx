import { createContext, useContext } from 'react'

const AuthContext = createContext()

function AuthProvider({ children }) {

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
            })
            .catch(err => {
                console.error(err)
            })
    }

    return (
        <>
            <AuthContext.Provider value={{ fetchRegister, fetchLogin }}>
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