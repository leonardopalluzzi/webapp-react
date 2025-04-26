import styles from './Jumbo.module.css';

export default function JumboUi({ image, title, content }) {
    return (
        <>
            <div className={styles.jumbo}>
                <div className={styles.jumboImgContainer}>
                    <img className={styles.jumboImg} src={`http://localhost:3000/${image}`} alt={title} />
                </div>
                <div className={styles.jumboInfo}>
                    <h1 className={styles.jumboTitle}>{title}</h1>
                    <p className={styles.jumboContent}>{content}</p>
                </div>
            </div>
        </>
    );
}