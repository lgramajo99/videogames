
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGenres } from "../../../redux/actions/actions";


function Filtracion() {
    const genres = useSelector((state) => state.genres);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchGenres());
    }, [dispatch]);


    return (
        <div>
            <label htmlFor="filtro">Filtrar por: </label>
            <select id="filtro" >

                <option value="Ninguno" >Ninguno</option>

                <optgroup label="Origen">
                    <option value="Api">Juegos externos</option>
                    <option value="bbd">Creados</option>
                </optgroup>
                <optgroup label="Genero">
                    {genres.map((genre) => { return (<option key={genre.id} value={genre.nombre}> {genre.nombre}</option>) })}
                </optgroup>
            </select>
        </div >
    )
}

export default Filtracion;