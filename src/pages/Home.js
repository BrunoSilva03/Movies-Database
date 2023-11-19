import { useState, useEffect } from 'react'

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

            console.log(response);
        }

        

        loadFilmes();
    }, [])
    return(
        <>
        <h1>Filmes</h1>
        </>
    )
}


export default Home;