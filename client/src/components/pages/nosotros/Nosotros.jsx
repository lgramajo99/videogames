import { Link } from 'react-router-dom';
import style from './Nosotros.module.css';

function Nosotros() {
    const img = `https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg`;
    const imgLinked = `https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Bug.svg.original.svg`;

    return (
        <div className={`${style.divContenedor}`}>
            <h1 className={`${style.h1}`}>Videogames</h1>
            <p className={`${style.p}`}>Esta es una pagina web dedicada a todos los juegos existentes</p>
            <p className={`${style.p}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi harum dicta quasi. Porro sapiente explicabo atque, quia aliquam similique quasi omnis, illo, facilis repudiandae eum praesentium voluptatem numquam. Animi, tempore.</p>
            <img src={img} alt="Luciano Nahuel Gramajo" className={`${style.img}`} />
            <p className={`${style.p}`}>Creada por @Luciano Nahuel Gramajo</p>

            <Link to={'https://www.linkedin.com/in/lucianogramajo/'} target='_blank' >
                <img className={style.imgLinked} src={imgLinked} alt="Red Linked In" />
            </Link>

        </div>
    )
}

export default Nosotros;