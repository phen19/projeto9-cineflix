import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from 'axios';
export default function Container() {

    const [films, setFilms] = useState([]);

    useEffect(() => {
        const requisicao = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies")

        requisicao.then(resposta =>{
                setFilms(resposta.data);
        });


    },[]);



    return (
        <>
            <div className="container">
                    <div className="title">
                        <p>Selecione o filme</p>
                    </div>
                    <div className ="content">
                       {films.map(film => 
                        <div className="film">
                            <Link
                                to= {`/filme/${film.id}`}
                            >
                            <img src= {film.posterURL} alt={film.title} />
                            </Link>
                        </div> )}
                    </div>
                </div>
        </>
    );

}