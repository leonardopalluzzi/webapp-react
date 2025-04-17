export default function RegisterUi({ onSubmit, onChangeUsername, onChangePassword, username, password, title, button, esit }) {
    return (
        <>
            <div className="container">
                <h1>{title}</h1>

                <form onSubmit={(e) => { e.preventDefault(); onSubmit() }} method="POST">
                    <input value={username} onChange={(e) => onChangeUsername(e.target.value)} className="form-control" type="text" placeholder="username" />
                    <input value={password} onChange={(e) => onChangePassword(e.target.value)} className="form-control" type="text" placeholder="password" />
                    <button type="submit" className="btn btn-primary" >{button}</button>
                </form>
                <div className={esit.state == 'success' ? `text-success` : 'text-danger'}>
                    <h6>{esit.state}</h6>
                    <span>{esit.message}</span>
                </div>

            </div >
        </>
    )
}