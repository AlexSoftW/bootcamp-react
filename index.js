var container = document.getElementById("root");
// var titulo = document.createElement("h1");
// titulo.innerHTML = "Titulo inserido pelo JavaScript";
// container.appendChild(titulo);


// function Titulo(props) {
//     return (
//         <React.Fragment>
//             <h2>{props.texto} {props.subtitulo}</h2>
//         </React.Fragment>
//     );
// }

// function Titulos() {
//     return (
//         <>
//             <Titulo texto="Minha primeira props, " subtitulo="isso é um subtitulo" />
//             <Titulo texto="Segundo texto da props" />
//             <Titulo texto="terceiro texto da props" />
//         </>
//     );
// }

function Participante(props) {

    const [numero, setNumero] = React.useState(0);

    function votar() { 
        setNumero(numero + 1);
    }

    return (
        <>
            <h1>{props.nome}</h1>
            <h2>{numero}</h2>
            <button onClick={votar}>Votar</button>
        </>
    );
}

function Votacao() {
    return (
        <>
            <Participante nome="Méqui"/>
            <Participante nome="Bks"/>
            <Participante nome="Popaye"/>
        </>
    );
}

ReactDOM.createRoot(container).render(<Votacao />)