import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import style from './Navbar.module.css';
import Searchbar from '../searchbar/Searchbar';
import { logOut } from '../../../redux/actions/access.actions'

function Navbar() {
    const dispatch = useDispatch();

    const handleLogOut = () => {
        dispatch(logOut());
    }

    return (
        <nav className={style.navbar}>
            <Link to='/home' className={style.logo}>Videogame</Link>

            <div className={style.divRight}>

                <Searchbar />
                <Link className={style.btnLink} to='/contacto'> Contactanos</Link>
                <Link className={style.btnLink} to='/nosotros'>Sobre nosotros</Link>
                <Link className={style.btnLink} to='/administracion'>⚙</Link>
                <Link className={style.btnLink} onClick={handleLogOut} >🚪</Link>

            </div>
        </nav>
    )
}




export default Navbar;