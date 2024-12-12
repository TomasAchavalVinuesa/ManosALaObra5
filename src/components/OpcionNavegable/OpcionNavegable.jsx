import { Link } from 'react-router-dom';

function OpcionNavegable({ opcion, referencia }) {
    return(
        <li className='navegable-opcion'><Link to={referencia}>{opcion}</Link></li>
    );
}

export default OpcionNavegable;