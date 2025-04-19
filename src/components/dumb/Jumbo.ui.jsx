export default function JumboUi({ image, title, content }) {
    return (
        <>
            <div className="jumbo">
                <div className="jumbo_img_container">
                    <img className="jumbo_img" src={`http://localhost:3000/${image}`} alt="" />
                </div>
                <div className="jumbo_info">
                    <h1>{title}</h1>
                    <span>{content}</span>
                </div>
            </div>
        </>
    )
}