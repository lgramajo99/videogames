import { useState } from 'react';
import style from './Form.module.css';
import { useDispatch } from 'react-redux';
import { addVideogame } from '../../../redux/actions/createGame.actions';


function Form() {
    const [generos, setGeneros] = useState(['']);
    const dispatch = useDispatch();


    const handleAgregarGenero = () => {
        setGeneros([...generos, '']);
    }

    const handleInputChange = (index, e) => {
        const newGeneros = [...generos];
        newGeneros[index] = e.target.value;
        setGeneros(newGeneros);
    }

    const handleEliminarGenero = (index) => {
        if (generos.length > 1) {
            const newGeneros = [...generos];
            newGeneros.splice(index, 1);
            setGeneros(newGeneros);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newVideogame = {
            nombre: e.target.nombre.value,
            imagen: e.target.imagen.value,
            descripcion: e.target.descripcion.value,
            plataformas: e.target.plataformas.value,
            fecha_lanzamiento: e.target.fecha_lanzamiento.value,
            rating: e.target.rating.value,
            generos: generos
        };
        dispatch(addVideogame(newVideogame));
        e.target.reset();
    }

    return (
        <div>
            <h3>Agregar juego nuevo</h3>

            <form className={style.formNewGame} onSubmit={handleSubmit}>
                <input className={style.inputs} type="text" name='nombre' placeholder="Nombre" />
                <input className={style.inputs} type="url" name='imagen' placeholder="url(imagen)" />
                <textarea className={style.inputs} name='descripcion' placeholder="descripcion del juego" id="" cols="30" rows="10"></textarea>
                <input className={style.inputs} type="text" name='plataformas' placeholder="Plataformas" />
                <input className={style.inputs} type="date" name='fecha_lanzamiento' placeholder="Fecha de lanzamiento (AAAA-MM-DD)" />
                <input className={style.inputs} type="number" name='rating' placeholder="Rating" />

                {generos.map((genero, index) => (
                    <input className={style.inputs} type="text" name='generos' placeholder="Genero" key={index} value={genero} onChange={(e) => handleInputChange(index, e)} />
                ))}

                <div className={style.divBtnGenero}>
                    <button type='button' className={`${style.btn} ${style.btnDelete}`} onClick={() => handleEliminarGenero()} >Eliminar genero</button>
                    <button type='button' className={`${style.btn} ${style.btnAdd}`} onClick={handleAgregarGenero}>Agregar genero</button>
                </div>

                <button className={`${style.btn} ${style.btnEnviar}`} type='submit'>Enviar</button>
            </form>
        </div >
    )

}

export default Form;
