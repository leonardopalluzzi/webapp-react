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
        console.log(newUser);

        fetch('http://localhost:3000/api/v1/users/register', {
            method: 'POST',
            body: newUser
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
        console.log(user);

        fetch('http://localhost:3000/api/v1/users/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
        })
            .then(res => {
                if (!res.ok) {
                    throw new Error('Invalid credentials');
                }
                return res.json();
            })
            .then(data => {
                const user = {
                    id: data.id,
                    username: data.username,
                    password: data.password,
                    token: data.token,
                    role: data.role
                };
                localStorage.setItem('user', JSON.stringify(user));
                console.log('utente salvato in local storage');

                setUserLogged(true);
                setLoginEsit({
                    state: 'success',
                    role: data.role
                });
                setUsername('')
                setPassword('')
            })
            .catch(err => {
                console.error(err);
                setLoginEsit({
                    state: 'error',
                    message: err.message
                });
            });
    }

    function logout() {
        localStorage.removeItem('user')
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