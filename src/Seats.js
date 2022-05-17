import enola from "./images/enola.png"

export default function Seats(){

    return(
        <>
        <div className="container">
            <div className="title">
                <p>Selecione o(s) Assento(s)</p>
            </div>
                <div className="seats">
                    <button>01</button> 
                    <button>02</button>
                    <button>03</button> 
                    <button>04</button>
                    <button>05</button> 
                    <button>06</button>
                    <button>07</button> 
                    <button>08</button>
                    <button>09</button> 
                    <button>10</button>
                    <button>01</button> 
                    <button>02</button>
                    <button>03</button> 
                    <button>04</button>
                    <button>05</button> 
                    <button>06</button>
                    <button>07</button> 
                    <button>08</button>
                    <button>09</button> 
                    <button>10</button>
                    <button>01</button> 
                    <button>02</button>
                    <button>03</button> 
                    <button>04</button>
                    <button>05</button> 
                    <button>06</button>
                    <button>07</button> 
                    <button>08</button>
                    <button>09</button> 
                    <button>10</button>
                    <button>01</button> 
                    <button>02</button>
                    <button>03</button> 
                    <button>04</button>
                    <button>05</button> 
                    <button>06</button>
                    <button>07</button> 
                    <button>08</button>
                    <button>09</button> 
                    <button>10</button>
                    <button>01</button> 
                    <button>02</button>
                    <button>03</button> 
                    <button>04</button>
                    <button>05</button> 
                    <button>06</button>
                    <button>07</button> 
                    <button>08</button>
                    <button>09</button> 
                    <button>10</button>
                    <button>01</button> 
                    <button>02</button>
                    <button>03</button> 
                    <button>04</button>
                    <button>05</button> 
                    <button>06</button>
                    <button>07</button> 
                    <button>08</button>
                    <button>09</button> 
                    <button>10</button>
                    
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
                    <input placeholder="Digite seu nome:"/>
                    <p>CPF do comprador:</p>
                    <input placeholder="Digite seu CPF:"/>
                </div>
                <div className="order">
                    <button>Reservar o(s) assentos(s)</button>
                </div>
        </div>
        <div className="footer">
            <div className="film">
            <img src= {enola} alt="Logo" />
            </div>
        <div className=" info">
        <p>Enola Holmes</p>
        <p>Quinta-feira - 15:00</p>
        </div>
        
        </div>
        </>

    )

}
