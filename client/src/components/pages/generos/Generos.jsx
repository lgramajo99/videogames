import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchGenres } from "../../../redux/actions/actions";
import { Link } from "react-router-dom";
import style from './Generos.module.css'

function Generos() {

    const genres = useSelector((state) => state.genres);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchGenres());
    }, [dispatch]);

    return (
        <div>
            <h3>Generos</h3>
            <ul className={style.ulGenero}>
                {genres.map((genre) => {
                    return (
                        <li key={genre.id} className={style.liGenero}>
                            <Link className={style.linkGenero} to={`/genero/${genre.nombre}`}>
                                {genre.nombre}
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Generos;










    // const [generos, setGeneros] = useState([]);
    // const [isMounted, setIsMounted] = useState(true);

    // useEffect(() => {
    //     setIsMounted(true);
    //     async function fetchData() {
    //         try {
    //             const response = await axios.get('http://localhost:3001/genres');
    //             if (isMounted) {
    //                 setGeneros(response.data);
    //             }
    //         } catch (error) {
    //             console.error(error);
    //         }
    //     }
    //     fetchData();
    //     return () => setIsMounted(false);
    // }, [isMounted]);