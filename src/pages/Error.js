import styles from './Error.module.css';

import { Link } from 'react-router-dom';
import imagemError from '../images/error_404.png';

function Error() {
    return(
        <div className={styles.container}>
            <div className={styles.conteudo}>
                <img src={imagemError} />
                <p>Error 404 - Page not found.</p>
                <Link to="/movies-database" className={styles.buttonLink}>Veja os filmes</Link>
            </div>
        </div>
    )
}

export default Error;