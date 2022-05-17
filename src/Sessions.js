import enola from "./images/enola.png"

export default function Sessions(){

    return(
        <>
        <div className="container">
            <div className="title">
                <p>Selecione o Horario</p>
            </div>
                <div className="sessions">
                    <p>Quinta-feira - 24/06/2021</p>
                    <button>15:00</button> <button>19:00</button>
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