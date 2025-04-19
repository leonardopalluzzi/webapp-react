import { useNavigate } from 'react-router-dom'

export default function RegisterUi({ onSubmit, onChangeUsername, onChangePassword, username, password, title, button, esit, redirect }) {

    const navigate = useNavigate()

    return (
        <>
            <div className="container bg-dark-subtle">
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
                            <input value={username} onChange={(e) => onChangeUsername(e.target.value)} className="form-control" type="text" placeholder="username" required />
                            <input value={password} onChange={(e) => onChangePassword(e.target.value)} className="form-control" type="password" placeholder="password" autocomplete="current-password" required />
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