import { useNavigate } from 'react-router-dom'

export default function RegisterFormUi({ onSubmit, onChange, registerInfo, title, button, esit, redirect }) {

    const navigate = useNavigate()

    return (
        <>
            <div className="container bg-dark-subtle public_form_container">
                <span className="text-danger fs-3 ">
                    per loggare con utenza admin: <br />
                    username: leonardo <br />
                    password: leo1234pallu
                </span>
            </div>
            <div className="container_form " data-bs-theme="dark">
                <div className="card w-50">
                    <div className="card-header">
                        <h1>{title}</h1>
                    </div>
                    <div className="card-body">
                        <form className="public_form" onSubmit={(e) => { e.preventDefault(); onSubmit() }} method="POST">
                            <input name='username' value={registerInfo.username} onChange={(e) => onChange(e.target.name, e.target.value)} className="form-control" type="text" placeholder="username" required />
                            <input name='email' value={registerInfo.email} onChange={(e) => onChange(e.target.name, e.target.value)} className="form-control" type="text" placeholder="email" required />
                            <input name='born_in' value={registerInfo.born_in} onChange={(e) => onChange(e.target.name, e.target.value)} className="form-control" type="date" placeholder="born_in" required />
                            <input name='phone' value={registerInfo.phone} onChange={(e) => onChange(e.target.name, e.target.value)} className="form-control" type="text" placeholder="phone" required />
                            <input name='avatar' value={registerInfo.avatar} onChange={(e) => onChange(e.target.name, e.target.value)} className="form-control" type="file" placeholder="avatar" required />
                            <input name='password' value={registerInfo.password} onChange={(e) => onChange(e.target.name, e.target.value)} className="form-control" type="password" placeholder="password" autoComplete="current-password" required />
                            <button onClick={() => navigate(redirect)} type="submit" className="btn btn-primary" >{button}</button>
                        </form>
                        <div className={esit.state == 'success' ? `text-success` : 'text-danger'}>
                            <h6>{esit.state}</h6>
                            <span>{esit.message}</span>
                        </div>
                    </div>

                </div>
            </div >
        </>
    )
}