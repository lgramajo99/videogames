import style from './Cards.module.css';
import Card from "../card/Card";
import Pagination from '../../common/pagination/Pagination.jsx';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchVideoGames } from '../../../redux/actions/videogames.actions.js';
import Filtracion from '../../common/filtracion/Filtracion';
import Ordenacion from '../../common/ordenacion/Ordenacion';

function Cards() {
    const dispatch = useDispatch();
    const videogames = useSelector((state) => state.videogames);
    const currentPage = useSelector((state) => state.currentPage);
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(fetchVideoGames(currentPage));
        navigate(`/home?page=${currentPage}`)

    }, [dispatch, currentPage, navigate]);

    return (
        <div className={style.cardsContainer}>
            <div className={style.botoneras}>
                <Filtracion />
                <Ordenacion />
            </div>
            <div className={style.divCards}>
                {videogames.map((videogame) => {
                    return (
                        <Card
                            key={videogame.id}
                            id={videogame.id}
                            nombre={videogame.nombre}
                            imagen={videogame.imagen}
                            generos={videogame.generos} />
                    );
                })}
            </div>
            <Pagination className={style.pagination} />
        </div>
    );
}

export default Cards;