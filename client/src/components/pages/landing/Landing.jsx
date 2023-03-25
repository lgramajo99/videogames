import style from './Landing.module.css';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import validation from "./validation";
import { login, loginGuest } from '../../../redux/actions/access.actions.js';

function Landing() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [mostrarLoginForm, setMostrarLoginForm] = useState(false);

    const [userData, setUserData] = useState({
        username: '',
        password: ''
    })
    const [errors, setErrors] = useState({
        username: '',
        password: ''
    })

    const handleInputChange = (e) => {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value
        })
        setErrors(validation({
            ...userData,
            [e.target.name]: e.target.value
        }))
    }


    const handleAdminBtn = () => { setMostrarLoginForm(true); }
    const handleCancelBtn = () => { setMostrarLoginForm(false); }

    const handleGuest = () => {
        dispatch(loginGuest());
        navigate('/home');
    }
    const handleLogin = () => {
        dispatch(login(userData));
        navigate('/home')
    }

    return (
        <div className={style.bgLanding}>
            <div className={style.divLanding}>

                {/* si el estado esta en FALSE aparece la bienvenida  */}
                {!mostrarLoginForm && (
                    <div>
                        <h3 className={style.titulo}>Bienvenido a VideoGames</h3>

                        <p className={style.parrafo}>Entra y encontrá todos los juegos, crea tu propia lista de favoritos Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia id asperiores non rerum, voluptatem incidunt nihil officiis qui. Perspiciatis omnis dolorem quibusdam incidunt optio sunt nesciunt beatae cupiditate commodi rerum. Laborum, ratione? </p>

                        <Link className={style.btn} onClick={handleAdminBtn}>Entrar como administrador</Link>
                        <button className={style.btn} onClick={handleGuest}>Entrar como invitado</button>
                    </div>)}

                {/* si el estado esta en TRUE aparece el form de login  */}
                {mostrarLoginForm && (
                    <form className={style.loginForm} onSubmit={handleLogin}>
                        <input
                            className={style.inputform}
                            placeholder='Ejemplo@ejemplo.com'
                            type="email"
                            value={userData.username}
                            id="username"
                            name="username"
                            onChange={(e) => handleInputChange(e)} />
                        <p>{errors.username || ''}</p>

                        <input
                            className={style.inputform}
                            placeholder='**********'
                            type="password"
                            value={userData.password}
                            id="password"
                            name="password"
                            onChange={(e) => handleInputChange(e)} />
                        <p>{errors.password || ''}</p>

                        <br />
                        <div className={style.buttonGroup}>
                            <button type="submit" className={style.btn}>
                                Ingresar
                            </button>
                            <button className={style.btn} onClick={handleCancelBtn}>
                                Cancelar
                            </button>
                        </div>
                    </form>)}
            </div >
        </div >
    )
}

export default Landing;