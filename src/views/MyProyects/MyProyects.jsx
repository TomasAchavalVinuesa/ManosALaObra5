import { useState } from "react";
import Header from "../../components/Header/Header.jsx";
import { GiHamburgerMenu } from "react-icons/gi";
import MenuLateral from "../../components/MenuLateral/MenuLateral.jsx";

function MyProyects(){
    const [menuVisible, setMenuVisible] = useState(false);

    const cambiarMenu = () => {
        setMenuVisible(!menuVisible);
    };

    return(
        <div className="navegacion">
            <Header claseP="boton" iconoP={<GiHamburgerMenu />} tituloP="My Proyects" onClickP={cambiarMenu}/>
            <MenuLateral visible={menuVisible} onClose={() => setMenuVisible(false)} />
        </div>
    );
}

export default MyProyects;