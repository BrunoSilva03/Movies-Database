import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

import styles from './Home.module.css';
import api from '../services/api'



function Home() {
    const [filmes, setFilmes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        async function loadFilmes() {
            const response = await api.get("movie/now_playing", {
                params: {
                    api_key: "60f04d056b064f913e494202bf2286d1",
                    language: "pt-BR",
                    page: 1,
                }
            })

            console.log(response.data.results);
            setFilmes(response.data.results.splice(0,16));
            //splice para mostrar só os primeiros 16 filmes
        }

        

        loadFilmes();
    }, [])
    return(
        <>
        <div className={styles.container}>
           {filmes.map((filme) => {
            return(
                <div className={styles.cardFilme} key={filme.id}>
                    <h1><strong>{filme.title}</strong></h1>
                    <img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt={filme.title} />
                    <Link to={`/movie/${filme.id}`} className={styles.btnAcessarFilme}>Acessar</Link>
                </div>
            )
           })}
        </div>
        </>
    )
}


export default Home;