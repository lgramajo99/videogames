import { Link, useNavigate } from 'react-router-dom';
import style from './Error.module.css';

function Error() {
    const navigate = useNavigate();

    const handleGoBack = () => { navigate(-1); }

    return (
        <div className={style.divError}>
            <h1 className={style.msjError}>Error 404: no se pudo encontrar esta pagina</h1>
            <Link className={style.btnLink} onClick={handleGoBack}>Volver atras ↙</Link>
            <Link className={style.btnLink} to={'/home'}>Volver al inicio ↙</Link>
        </div>
    )
}
export default Error;