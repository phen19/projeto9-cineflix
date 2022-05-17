import film2067 from "./images/2067.png"
import enola from "./images/enola.png"
export default function Container() {
    return (
        <>
            <div className="container">
                    <div className="title">
                        <p>Selecione o filme</p>
                    </div>
                    <div className ="content">
                        <div className="film">
                            <img src= {film2067} alt="Logo" />
                        </div>
                        <div className="film">
                            <img src= {enola} alt="Logo" />
                        </div>
                        <div className="film">
                            <img src= {film2067} alt="Logo" />
                        </div>
                        <div className="film">
                            <img src= {enola} alt="Logo" />
                        </div>
                        <div className="film">
                            <img src= {film2067} alt="Logo" />
                        </div>
                        <div className="film">
                            <img src= {enola} alt="Logo" />
                        </div>
                        <div className="film">
                            <img src= {film2067} alt="Logo" />
                        </div>
                        <div className="film">
                            <img src= {enola} alt="Logo" />
                        </div>
                    </div>
                </div>
        </>
    );

}