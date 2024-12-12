import TituloNavegador from "../TituloNavegador/TituloNavegador.jsx";
import BotonNavegador from "../BotonNavegador/BotonNavegador.jsx";

function Header({ claseP, iconoP, onClickP, tituloP }){
    return(
        <div className="Header">
            <BotonNavegador clase={claseP} icono={iconoP} onClick={onClickP}/>
            <TituloNavegador titulo={tituloP}/>
        </div>
    );
}

export default Header;