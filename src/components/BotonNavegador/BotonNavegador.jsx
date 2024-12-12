function BotonNavegador({ clase, icono, onClick }){

    return(
        <button className={clase} onClick={onClick}>{icono}</button>
    );
}

export default BotonNavegador;