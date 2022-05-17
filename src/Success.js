export default function Success() {
    return (
        <>
        <div className="container">
            <div className="title success">
                <p>Pedido feito com sucesso!</p>
            </div>
                <div className="successInfo">
                    <p><strong>Filme e Sessao</strong></p>
                    <p>Enola Holmes  </p>
                    <p>24/06/2021 15:00</p>
                </div>
                <div className="successInfo">
                    <p><strong>Ingressos</strong></p>
                    <p>Assento 15 </p>
                    <p>Assento 16</p>
                </div>
                <div className="successInfo">
                    <p><strong>Comprador</strong></p>
                    <p>Nome: Fulano </p>
                    <p>CPF: 123.456.789-10</p>
                </div>
                <div className="order">
                    <button>Reservar o(s) assentos(s)</button>
                </div>
        </div>
        </>
    );

}