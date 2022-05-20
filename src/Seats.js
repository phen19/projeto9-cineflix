import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';


function Seat({isAvailable, name, seatID, selection, setSelection}){
    const [selected, setSelected] = useState("");

   
        return(
            <button id={seatID} onClick={() => clickSeat(isAvailable, seatID, selected)} className= {
                isAvailable ? "available" + selected : "taken"
              }>{name}</button>
        )
    


function clickSeat(isAvailable, seatID, selected) {
    if (isAvailable) {
      if (selected === "") {
        setSelected(" selected");
        setSelection([...selection, seatID]);
      } else {
        setSelected("");
        let newArr = selection.filter(
          (selectedID) => selectedID !== seatID
        );
        setSelection(newArr);
      }
    }else{
        alert("Esse assento nao esta disponivel")
    }
  }
}


export default function Seats(){
    
    const  { sessionID }  = useParams();
    const [session, setSession] = useState([]);
    const [selection, setSelection] = useState([]);
    const [name, setName] = useState("");
    const [cpf, setCPF] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const requisicao = axios.get(
            `https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${sessionID}/seats`)

        requisicao.then((resposta) =>{
                setSession(resposta.data);
        });
    },[]);

    if (session === [] || session === null || session.length === 0) {
        return (
          <>
            <p>LOADING SEATS...</p>
          </>
        );
      } else {

    return(
        <>
        <div className="container">
            <div className="title">
                <p>Selecione o(s) Assento(s)</p>
            </div>
                <div className="seats">
                    {session.seats.map((seat) => <Seat name = {seat.name} isAvailable={seat.isAvailable} seatID = {seat.name} selection={selection} setSelection={setSelection}/>)}
                </div>
                <div className="guide">
                    <div className ="balls">
                        <div className="selected"></div> 
                        <p>Selecionado</p>
                    </div>
                    <div className="balls">
                        <div className="available"></div>
                        <p>Disponivel</p>
                    </div>
                    <div className="balls">
                        <div className="taken"></div>
                        <p>Indisponivel</p>
                    </div>
                </div>
                <div className="orderInfo">
                    <p>Nome do comprador:</p>
                    <input placeholder="Digite seu nome:" onChange={(e) => setName(e.target.value)}/>
                    <p>CPF do comprador:</p>
                    <input placeholder="Digite seu CPF:" onChange={(e) => setCPF(e.target.value)}/>
                </div>
                <div className="order">
                    <button onClick={() => buttonSuccess(selection, name, cpf)}>Reservar o(s) assentos(s)</button>
                </div>
        </div>
        <div className="footer">
            <div className="film">
            <img src= {session.movie.posterURL} alt="Logo" />
            </div>
        <div className=" info">
        <p>{session.movie.title}</p>
        <p>{session.day.weekday} - {session.day.date}</p>
        </div>
        
        </div>
        </>

    )

}

function buttonSuccess(selection, name, cpf) {
    let data = { ids: selection, nome: name, cpf: cpf };
    let dataNavigate = {
      selection: selection,
      name: name,
      cpf: cpf,
      title: session.movie.title,
      date: session.day.date,
      session: session.name,
    };
    const requisicaoPost = axios.post(
      "https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many",
      data
    );
    requisicaoPost.then(() => {
      navigate("/sucesso", { state: dataNavigate });
    });
    requisicaoPost.catch((response) => console.log(response));
}
}