export default function ThreadsMessageUi({ username, content, creation_date }) {
    return (
        <>
            <div className="card_thread">
                <div className="card_header_thread">
                    <h6>{username}:</h6>
                </div>
                <div className="card_body_thread">
                    <div>{content}</div>
                </div>
                <span>{creation_date}</span>
            </div>
        </>
    )
}