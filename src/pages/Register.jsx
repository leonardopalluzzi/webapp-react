import { useState } from 'react'
import { useAuthContext } from '../contexts/authenticationContext'
import RegisterFormUi from '../components/dumb/RegisterForm.ui.jsx'

export default function Register() {

    const { fetchRegister, signUpEsit } = useAuthContext()

    const [registerInfo, setRegisterInfo] = useState({
        username: '',
        email: '',
        born_in: '',
        phone: '',
        avatar: '',
        password: '',
    })

    function handleChange(key, value) {
        setRegisterInfo({
            ...registerInfo,
            [key]: value
        })
    }

    function handleSubmit() {

        console.log(registerInfo);


        const userToSend = new FormData();

        userToSend.append('username', registerInfo.username)
        userToSend.append('email', registerInfo.email)
        userToSend.append('born_in', registerInfo.born_in)
        userToSend.append('last_login', registerInfo.last_login)
        userToSend.append('phone', registerInfo.phone)
        userToSend.append('avatar', registerInfo.avatar)
        userToSend.append('password', registerInfo.password)

        fetchRegister(userToSend)
        setRegisterInfo({
            username: '',
            email: '',
            born_in: '',
            last_login: '',
            phone: '',
            avatar: '',
            password: '',
        })
    }

    return (
        <>
            <RegisterFormUi
                redirect={'/login'}
                esit={signUpEsit}
                button={'Register'}
                title={'Register Form'}
                onSubmit={handleSubmit}
                onChange={handleChange}
                registerInfo={registerInfo}
            />
        </>
    )
}