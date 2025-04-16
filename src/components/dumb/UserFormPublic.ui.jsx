export default function RegisterUi({ onSubmit, onChangeUsername, onChangePassword, username, password, title }) {
    return (
        <>
            <div className="container">
                <h1>{title}</h1>

                <form onSubmit={(e) => { e.preventDefault(); onSubmit() }} method="POST">
                    <input value={username} onChange={(e) => onChangeUsername(e.target.value)} className="form-control" type="text" placeholder="username" />
                    <input value={password} onChange={(e) => onChangePassword(e.target.value)} className="form-control" type="text" placeholder="password" />
                    <button type="submit" className="btn btn-primary" >Register</button>
                </form>
            </div >
        </>
    )
}