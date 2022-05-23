import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';


function Seat({isAvailable, name, seatID, selection, setSelection, seatName, setSeatName}){
    const [selected, setSelected] = useState("");

   
        return(
            <button id={seatID} onClick={() => clickSeat(isAvailable, name ,seatID, selected)} className= {
                isAvailable ? "available" + selected : "taken"
              }>{name}</button>
        )
    


function clickSeat(isAvailable, name, seatID, selected) {
    if (isAvailable) {
      if (selected === "") {
        setSelected(" selected");
        setSelection([...selection, seatID]);
        setSeatName([...seatName, name]);
      } else {
        setSelected("");
        let newArr = selection.filter(
          (selectedID) => selectedID !== seatID
        );
        setSelection(newArr);
        let newArr2 = seatName.filter(
          (selectedName) => selectedName !== name
        );
        setSeatName(newArr2);
      }
    }else{
        alert("Esse assento não está disponível")
    }
  }
}


export default function Seats(){
    
    const  { sessionID }  = useParams();
    const [session, setSession] = useState([]);
    const [selection, setSelection] = useState([]);
    const [seatName, setSeatName] = useState([]);
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
                    {session.seats.map((seat, index) => <Seat key={index} name = {seat.name} isAvailable={seat.isAvailable} seatID = {seat.id} selection={selection} setSelection={setSelection} seatName={seatName} setSeatName={setSeatName}/>)}
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
                <form onSubmit={(e) => buttonSuccess(selection,name, cpf,seatName, e.preventDefault())}>
                <div className="orderInfo">
                    <p>Nome do comprador:</p>
                    <input placeholder="Digite seu nome:" onChange={(e) => setName(e.target.value)} required/>
                    <p>CPF do comprador:</p>
                    <input placeholder="Digite seu CPF:" onChange={(e) => setCPF(e.target.value)} pattern="\d{3}\.\d{3}\.\d{3}-\d{2}" required/>
                </div>
                <div className="order">
                    <button type="submit">Reservar o(s) assentos(s)</button>
                </div>
                </form>
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

function buttonSuccess(selection, name, cpf, seatName) {


    let data = { ids: selection, nome: name, cpf: cpf };
    let dataNavigate = {
      selection: selection,
      name: name,
      cpf: cpf,
      title: session.movie.title,
      date: session.day.date,
      session: session.name,
      seatName: seatName,
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
