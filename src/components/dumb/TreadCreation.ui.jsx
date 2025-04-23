export default function TreadCreationUi({ onSubmit, onChange, threadName, title }) {
    return (
        <>
            <div className="container py-5 thread_page">
                <div className="container">
                    <h1>Create a New Thread</h1>
                    <form method="POST" onSubmit={(e) => { e.preventDefault(); onSubmit() }} className="d-flex flex-column">
                        <label htmlFor="title" className="mb-2">Thread Title:</label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            className="input_edit_page mb-4"
                            placeholder="Enter the thread title"
                            value={title}
                            onChange={(e) => onChange(e.target.value)}
                            required
                        />
                        <button
                            type="submit"
                            className="btn btn-primary">
                            Create Thread
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}