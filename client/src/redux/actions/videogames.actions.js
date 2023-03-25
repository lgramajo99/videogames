import axios from 'axios';
import {
    FETCH_VIDEOGAME_FAILURE,
    FETCH_VIDEOGAME_REQUEST,
    FETCH_VIDEOGAME_SUCCESS,
    SET_CURRENT_PAGE,
    SET_VIDEOGAMES,
} from '../action-types.js'

export function fetchVideoGames(currentPage) {
    return async (dispatch) => {
        try {
            const response = await axios.get('http://localhost:3001/videogames');
            const videogames = response.data;
            const gamesPerPage = 15;
            const start = (currentPage - 1) * gamesPerPage;
            const end = start + gamesPerPage;
            const videogamesPerPage = videogames.slice(start, end);
            dispatch(setVideoGamesPerPage(videogamesPerPage));
        } catch (error) {
            console.log(error);
        }
    };
}

export function setVideoGamesPerPage(videogames) {
    return {
        type: SET_VIDEOGAMES,
        payload: videogames
    };
}

export function setCurrentPage(page) {
    return {
        type: SET_CURRENT_PAGE,
        payload: page,
    };
}

export const fetchVideogameRequest = () => ({
    type: FETCH_VIDEOGAME_REQUEST
});

export const fetchVideogameSuccess = (videogame) => ({
    type: FETCH_VIDEOGAME_SUCCESS,
    payload: videogame
});

export const fetchVideogameFailure = (error) => ({
    type: FETCH_VIDEOGAME_FAILURE,
    payload: error
});

export const fetchVideogame = (id) => {
    return async (dispatch) => {
        dispatch(fetchVideogameRequest());
        await axios.get(`http://localhost:3001/videogames/${id}`)
            .then(response => {
                const videogame = response.data;
                dispatch(fetchVideogameSuccess(videogame));
            })
            .catch(error => {
                const errorMessage = error.message;
                dispatch(fetchVideogameFailure(errorMessage));
            });
    };
};

export const setVideoGames = (videogames) => ({
    type: SET_VIDEOGAMES,
    payload: videogames,
});

export function buscarJuegoPorNombre(name) {
    return async (dispatch) => {
        try {
            const response = await axios.get(`http://localhost:3001/videogames/${name}`);
            const videogames = response.data;
            dispatch(setVideoGames(videogames));
        } catch (error) {
            console.log(error);
        }
    };
}
