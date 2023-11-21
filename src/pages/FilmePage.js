import { useParams, useNavigate } from 'react-router-dom';
import styles from './FilmePage.module.css';
import styles2 from './Home.module.css';
import { useState, useEffect } from 'react';

import api from '../services/api';


function FilmePage() {
    const { id } = useParams();
    const [filme, setFilme] = useState({});
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        async function loadFilme() {
            await api.get(`/movie/${id}`, {
                params: {
                    api_key: "60f04d056b064f913e494202bf2286d1",
                    language: "pt-BR",
                }
            }).then((response) => {
                setFilme(response.data);
                console.log(response);
                console.log('Filme: ' + filme.title);
                setLoading(false);
            })
                .catch(() => {
                    console.log("FILME NÃO ENCONTRADO!");
                    navigate("/movies-database", { replace: true });
                    return;

                })
        }

        loadFilme();

        return () => {
            console.log("COMPONENTE FOI DESMONTADO...");
        }
    }, [id, navigate]);

    if (loading) {
        return (
            <div className={styles.telaLoading}>
                <p><h1>Sua Internet é terrivelmente lenta, aguarde enquanto carrega os dados do filme...</h1></p>
            </div>
        )
    }


    return (
        <div className={styles.containerPageFilme}>
            <div className={styles.pageInfo}>
                <h1>{filme.title}</h1>
                <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path
                    }`} alt={filme.title} />
            </div>
        </div>
    )
}

export default FilmePage