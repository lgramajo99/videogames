import { SET_GENRES } from '../action-types';
import axios from 'axios';


export function fetchGenres() {
    return async (dispatch) => {
        try {
            const response = await axios.get('http://localhost:3001/genres');
            const genres = response.data;
            dispatch(setGenres(genres));
        } catch (error) {
            console.log(error);
        }
    };
}

export function setGenres(genres) {
    return {
        type: SET_GENRES,
        payload: genres
    };
}
