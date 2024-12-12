import BotonNavegador from "../BotonNavegador/BotonNavegador.jsx";
import LogoApp from "../LogoApp/LogoApp.jsx";
import OpcionNavegable from "../OpcionNavegable/OpcionNavegable.jsx";
import { IoCloseSharp } from "react-icons/io5";

function MenuLateral({ visible, onClose }) {
    return (
        <div className={`menu-lateral ${visible ? "visible" : ""}`}>
            <div className="menu-content">
                <BotonNavegador clase="close-button" onClick={onClose} icono={<IoCloseSharp />}/>
                <LogoApp/>
                <ul>
                    <OpcionNavegable referencia="/" opcion="Home"/>
                    <OpcionNavegable referencia="/my-projects" opcion="My projects"/>
                    <OpcionNavegable referencia="/my-stories" opcion="My Stories"/>
                    <OpcionNavegable referencia="/settings" opcion="Settings"/>   
                </ul>
            </div>
        </div>
    );
}

export default MenuLateral;