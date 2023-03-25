import style from './Card.module.css';
import { Link } from 'react-router-dom';

function Card({ nombre, imagen, generos, id }) {
    const listaGeneros = generos.split(",");

    return (
        <div className={style.divCard}>
            <img className={style.imgGame} src={imagen} alt={nombre} />

            <div className={style.divInfo}>
                <Link to={`/detalles/${id}`} className={style.nombreGame}>{nombre}</Link>

                <div className={style.divGenero}>
                    <p className={style.pGenero}>generos: </p>
                    <div className={style.divGeneros}>

                        {listaGeneros.map((genero, index) => (
                            <Link to={`/genero/${genero.trim()}`}
                                key={`${genero}-${index}`}
                                className={style.linkGenero}>

                                {genero.trim()}

                            </Link>)
                        )}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;