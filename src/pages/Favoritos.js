import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

import styles from './Favoritos.module.css';

function Favoritos() {
    const [filmes, setFilmes] = useState([]);

    useEffect(() => {
        const lista = localStorage.getItem("@filmesfavoritos");
        setFilmes(JSON.parse(lista));
    }, [])


    function excluirFilme(id) {
        let filtroFilmes = filmes.filter((filme) => {
            return (filme.id !== id);
        });

        setFilmes(filtroFilmes);

        localStorage.setItem("@filmesfavoritos", filtroFilmes);
        toast.success('Filme removido da lista com Sucesso!!!');

    }


    return (
        <div className={styles.container}>
            <div className={styles.conteudo}>
                <h1>Filmes Favoritos</h1>

                {filmes.length === 0 && <span>Você não tem nenhum filme na lista de favoritos no momento.</span>}
               
                <ul>
                    {filmes.map((filme) => {
                        return (
                            <li key={filme.id}>
                                <div className={styles.cardFilme}>
                                    <h3>{filme.title}</h3>
                                    <img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt={filme.title} />
                                    <div className={styles.areaButton}>
                                        <Link to={`/movie/${filme.id}`} ><button className={styles.btn}>Detalhes</button></Link>

                                        <button className={styles.btn} onClick={() => excluirFilme(filme.id)}>Excluir Filme</button>
                                    </div>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

export default Favoritos;