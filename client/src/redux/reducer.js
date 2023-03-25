import {
    SET_VIDEOGAMES,
    SET_CURRENT_PAGE,
    FETCH_VIDEOGAME_FAILURE,
    FETCH_VIDEOGAME_REQUEST,
    FETCH_VIDEOGAME_SUCCESS,
    SET_GENRES,
    SET_ACCESS,
    BUSCAR_JUEGO_POR_NOMBRE,
    ADD_VIDEOGAME_REQUEST,
    ADD_VIDEOGAME_SUCCESS,
    ADD_VIDEOGAME_FAILURE,

} from './action-types';

const initialState = {
    videogames: [],
    genres: [],
    currentPage: 1,
    isLoading: false,
    error: '',
    access: false
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case SET_VIDEOGAMES:
            return {
                ...state,
                videogames: action.payload
            };

        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.payload
            };
        // ---------------------------------------------------
        case FETCH_VIDEOGAME_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: ''
            };
        case FETCH_VIDEOGAME_SUCCESS:
            return {
                ...state,
                isLoading: false,
                videogame: action.payload
            };
        case FETCH_VIDEOGAME_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            };
        // ----------------------------------------------------
        case SET_GENRES:
            return {
                ...state,
                genres: action.payload
            };
        case SET_ACCESS:
            return {
                ...state,
                access: action.payload
            };
        case BUSCAR_JUEGO_POR_NOMBRE:
            const nombreJuego = action.payload;
            const juegosEncontrados = state.videogames.filter(
                (juego) => juego.name.toLowerCase().includes(nombreJuego.toLowerCase())
            );
            return {
                ...state,
                videogames: juegosEncontrados,
            };
        // -----------------------------------------------------
        case ADD_VIDEOGAME_REQUEST:
            return {
                ...state,
                loading: true
            }
        case ADD_VIDEOGAME_SUCCESS:
            return {
                ...state,
                videogame: action.payload,
                loading: false
            }
        case ADD_VIDEOGAME_FAILURE:
            return {
                ...state,
                error: action.payload,
                loading: false
            }

        default: return state;
    }
}

export default reducer;
