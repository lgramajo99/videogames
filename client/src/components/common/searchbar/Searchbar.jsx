import style from './Searchbar.module.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { buscarJuegoPorNombre } from '../../../redux/actions/videogames.actions';

function Searchbar() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        const nombreJuego = event.target.elements.search.value;
        dispatch(buscarJuegoPorNombre(nombreJuego));
        navigate(`/detalles/${nombreJuego}`);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input className={style.inputSearch} type="text" placeholder="Buscar un juego" name="search" />
            <button className={style.btnSearch} type="submit">🔎</button>
        </form>
    )
}

export default Searchbar;

