import styles from './Header.module.css';
import { Link } from 'react-router-dom';

function Header() {
    return(
        <div className={styles.navbar}>
           
                <Link to="/Movies-Database" className={styles.link}>
                    <h1 className={styles.itensNavbar}>Movies Database</h1>
                </Link>
                <Link className={styles.link}><h3 className={styles.itensNavbar}>Meus Filmes</h3></Link>
            
        </div>
    )
}

export default Header;