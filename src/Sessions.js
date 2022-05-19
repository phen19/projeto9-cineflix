import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import enola from "./images/enola.png"


export default function Sessions(){

    const  { filmID }  = useParams();
    const [sessions, setSessions] = useState([]);

    useEffect(() => {
        const requisicao = axios.get(
            `https://mock-api.driven.com.br/api/v5/cineflex/movies/${filmID}/showtimes`)

        requisicao.then((resposta) =>{
                setSessions(resposta.data);
        });
    },[]);
    
    
    return(
        <>
        <div className="container">
            <div className="title">
                <p>Selecione o Horario</p>
            </div>
               <div className="sessions">
                   {sessions.title} 
                    {/*sessions.days.map(({session},key) => <p>{session.weekday}</p>)*/}
                </div> 
        </div>
        <div className="footer">
            <div className="film">
            <img src={enola} alt="Logo" />
            </div>
        <div className=" info">
        <p>Enola Holmes</p>
        </div>
        
        </div>
        </>

    )

}