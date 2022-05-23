import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';



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
    
    
    if (sessions === [] || sessions === null || sessions.length === 0) {
        return (
          <>
            <p>LOADING SESSOES...</p>
          </>
        );
      } else {
    return(
        <>
        <div className="container">
            <div className="title">
                <p>Selecione o Horario</p>
            </div>
               <div className="sessions">
                   
                    {sessions.days.map((session) => (<><p key={session.id}>{session.weekday} - {session.date}</p>
                    <div className="showtime">{session.showtimes.map((showtime) => <Link to={`/sessao/${showtime.id}`}><button key={showtime.id}>{showtime.name}</button></Link>)}</div>
                    </>))}
                </div> 
        </div>
        <div className="footer">
            <div className="film">
            <img src={sessions.posterURL} alt="porster" />
            </div>
        <div className=" info">
        <p>{sessions.title}</p>
        </div>
        
        </div>
        </>

    )

}
}