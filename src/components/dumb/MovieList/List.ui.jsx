import { Link } from 'react-router-dom';
import styles from './List.module.css';

export default function ListUi({ data, title, path }) {
    return (
        <>
            <div className={styles.container}>
                <h2 className={styles.title}>{title}</h2>
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-4">
                    {data.map(item => (
                        <Link key={item.id} className={styles.link} to={`/${item.id}/${path}`}>
                            <div className="col h-100">
                                <div className={styles.card}>
                                    <div className={styles.cardHeader}>
                                        <img className={styles.image} src={`http://localhost:3000/${item.image}`} alt={item.title} />
                                    </div>
                                    <div className={styles.cardBody}>
                                        <h3 className={styles.cardTitle}>{item.title}</h3>
                                        <p className={styles.cardAbstract}>{item.abstract}</p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </>
    );
}