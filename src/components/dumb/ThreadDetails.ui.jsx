export default function ThreadDetailsUi({ title, creator, image, messages }) {
    return (
        <>
            <h1>thread details</h1>
            <span>{title}</span>
            <span>{creator}</span>
            <span>{image}</span>
            <span>{messages}</span>
        </>
    )
}