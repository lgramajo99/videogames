import Cards from "../cards/Cards";
import Generos from "../generos/Generos.jsx";
import style from './Home.module.css';

function Home() {
    return (
        <div className={style.divHome}>
            <Generos />
            <Cards />
        </div>
    )
}

export default Home;
