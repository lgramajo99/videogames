import axios from 'axios';
import {
  ADD_VIDEOGAME_REQUEST,
  ADD_VIDEOGAME_SUCCESS,
  ADD_VIDEOGAME_FAILURE,
} from '../action-types';

export const addVideogame = (videogameData) => {
  return (dispatch) => {
    dispatch(addVideogameRequest());

    axios.post('localhost:3001/videogames', videogameData)
      .then(response => {
        dispatch(addVideogameSuccess(response.data));
      })
      .catch(error => {
        dispatch(addVideogameFailure(error.message));
      });
  }
}

export const addVideogameRequest = () => {
  return {
    type: ADD_VIDEOGAME_REQUEST
  }
}

export const addVideogameSuccess = (videogame) => {
  return {
    type: ADD_VIDEOGAME_SUCCESS,
    payload: videogame
  }
}

export const addVideogameFailure = (error) => {
  return {
    type: ADD_VIDEOGAME_FAILURE,
    payload: error
  }
}
