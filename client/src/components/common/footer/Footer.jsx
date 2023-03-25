import style from './Footer.module.css';
import { Link } from 'react-router-dom';

function Footer() {

    const year = new Date().getFullYear();

    return (
        <div className={style.divFooter}>
            <div className={style.divPadre}>
                <hr className={style.hr} />

                <div className={style.divHijo}>
                    <p className={style.pCopy}>&copy; {year} Videogames - Todos los derechos reservados. - Web simulada.</p>
                    <Link className={style.links} to={"/politica-de-privacidad"}>Politica de privacidad</Link>
                    <Link className={style.links} to={"/informacion-legal"}>Informacion legal</Link>
                    <Link className={style.links} to={"/cookies"}>Cookies</Link>
                </div>

                <hr className={style.hr} />

                <div className={style.divHijo}>
                    <Link className={style.links} to={'/nosotros'}>Acerca de Videogames</Link>
                    <Link className={style.links} to="https://www.facebook.com" target="_blank">Facebook</Link>
                    <Link className={style.links} to="https://www.twitter.com" target="_blank">Twitter</Link>
                    <Link className={style.links} to="https://www.instagram.com" target="_blank">Instagram</Link>
                </div>
            </div>
        </div>

    )
}
export default Footer;