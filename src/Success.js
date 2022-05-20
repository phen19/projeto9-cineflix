import { Link, useLocation } from "react-router-dom";

export default function Success() {
    const location = useLocation();
  console.log(location);
  const { name, cpf, date, title, session, selection } = location.state;
    return (
        <>
        <div className="container">
            <div className="title success">
                <p>Pedido feito com sucesso!</p>
            </div>
                <div className="successInfo">
                    <p><strong>Filme e Sessao</strong></p>
                    <p>{title}  </p>
                    <p> {date} {session}</p>
                </div>
                <div className="successInfo">
                    <p><strong>Ingressos</strong></p>
                    {selection.map((id)=> <p>Assento {id}</p>)}
                </div>
                <div className="successInfo">
                    <p><strong>Comprador</strong></p>
                    <p>Nome: {name} </p>
                    <p>CPF: {cpf}</p>
                </div>
                <div className="order">
                    <Link to="/">
                    <button>Voltar pra home</button>
                    </Link>
                </div>
        </div>
        </>
    );

}