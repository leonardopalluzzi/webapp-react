export default function JumboUi({ image, title, content }) {
    return (
        <>
            <div className="jumbo">
                <div className="jumbo_img_container">
                    <img className="jumbo_img" src={`http://localhost:3000/${image}`} alt="" />
                </div>
                <div className="jumbo_info">
                    <span className="text-danger fs-3 bg-dark-subtle">
                        per loggare con utenza admin: <br />
                        username: leonardo <br />
                        password: leo1234pallu
                    </span>
                    <h1>{title}</h1>
                    <span>{content}</span>
                </div>
            </div>
        </>
    )
}