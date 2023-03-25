import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchVideogame } from '../../../redux/actions/videogames.actions.js';
import style from './Detail.module.css';

function Detail() {
    const { id } = useParams();
    const { nombre, imagen, descripcion, fecha_lanzamiento, plataformas, rating, generos } = useSelector(state => state.videogame || {});
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchVideogame(id));
    }, [id, dispatch]);

    return (
        <div style={{ backgroundImage: `url(${imagen})` }} className={style.pageDetalle}>

            <div className={`${style.divDetalle}`} >
                <h1 className={`${style.nombre} ${style.h1}`}>{nombre}</h1>
                <p className={`${style.identificador} ${style.p}`}>Identificador: [{id}]</p>
                <p className={`${style.descripcion} ${style.p}`}>{descripcion}</p>

                <img className={`${style.img}`} src={imagen} alt={nombre} />

                <p className={`${style.plataformas} ${style.p}`}>Disponible en: {plataformas}</p>
                <p className={`${style.rating} ${style.p}`}>Rating promedio: {rating} / 5</p>
                <p className={`${style.generos} ${style.p}`}>Generos: {generos}</p>

                <p className={`${style.fechaLanzamiento} ${style.p}`}>Fecha de lanzamiento: {fecha_lanzamiento}</p>
            </div>
        </div >
    );
}

export default Detail;