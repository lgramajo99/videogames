import { Link } from 'react-router-dom';
import style from './Pagination.module.css';
import { setCurrentPage } from '../../../redux/actions/videogames.actions';
import { useDispatch, useSelector } from 'react-redux';


function Pagination() {

    const dispatch = useDispatch();
    const currentPage = useSelector((state) => state.currentPage);

    const gxp = Math.ceil(100 / 15)
    const totalPages = gxp;
    const pages = [...Array(totalPages).keys()].map((page) => page + 1);


    const handleClick = (page) => {
        dispatch(setCurrentPage(page))
    };
    // -----------------------------------------

    return (
        <div className={style.pagination}>
            <Link className={style.a} onClick={() => handleClick(currentPage - 1)}>&laquo;</Link>

            {pages.map((page) => (
                <Link key={page} className={`${style.a}`} onClick={() => handleClick(page)}> {page}</Link>)
            )}

            <Link onClick={() => handleClick(currentPage + 1)} className={style.a}>&raquo;</Link>
        </div >
    );
}

export default Pagination;