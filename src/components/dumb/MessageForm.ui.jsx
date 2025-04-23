export default function MessageFormUi({ onSubmit, onChange, newMessage, submitEsit }) {
    return (
        <>
            <form onSubmit={(e) => { e.preventDefault(); onSubmit() }} method="POST">
                <h2>Leave a message</h2>
                <textarea className="form-control my-4" placeholder="Write your review here" onChange={(e) => onChange(e.target.value)} type="text" value={newMessage} />
                <div className={submitEsit.state == 'error' ? 'd-block text-danger' : 'text-success'}>
                    <h5>{submitEsit.state}</h5>
                    <span>{submitEsit.message}</span>
                </div>
                <button type="submit" className="btn btn-primary">Post Message</button>
            </form >
        </>
    )
}