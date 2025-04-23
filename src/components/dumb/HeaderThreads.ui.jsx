export default function HeaderThreadsUi() {
    return (
        <>
            <header className="header_threads">
                <div className="logo">FILMS</div>
                <div className="serachbar_container">
                    <input className="threads_serachbar mx-4" type="text" placeholder="search for a thread" />
                    <button className="btn btn-primary">Search</button>
                </div>

            </header>
        </>
    )
}