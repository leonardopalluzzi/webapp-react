export default function JumboUi({ image, title, content, comments }) {
    return (
        <>
            <div className="container jumbo">
                <div>
                    <img className="jumbo_img" src={`http://localhost:3000/${image}`} alt="" />
                </div>
                <div className="col jumbo_info">
                    <h2>{title}</h2>
                    <span>{content}</span>
                    <div>{comments}</div>
                </div>
            </div>
        </>
    )
}