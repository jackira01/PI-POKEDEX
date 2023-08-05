import axios from 'axios';

export const BRING_POKEMONS = 'BRING_POKEMONS';
export const SET_SEARCH_LIST = 'SET_SEARCH_LIST';
export const BRING_TYPES = 'BRING_TYPES';
export const POKEMON_FILTER = 'POKEMON_FILTER';
export const BRING_DETAIL = 'BRING_DETAIL';
export const SET_RENDER = 'SET_RENDER';
export const ERROR = 'ERROR';

const BACK_LINK = process.env.REACT_APP_BACK_LINK;

//el thunk lo uso solo si quiero hacer funciones asincronas

export function bringPokemons() {
  //el dispatch se lo pasamos porque tenemos que decirle cuando tenemos que
  //disparar la accion que vendria siendo nuestro return
  return async function (dispatch) {
    try {
      const response = await axios(`${BACK_LINK}/pokemon`);
      const pokemons = response.data;
      dispatch({
        type: BRING_POKEMONS,
        payload: pokemons,
      });
    } catch (error) {
      dispatch({
        type: ERROR,
        payload: error.message,
      });
    }
  };
}

export function searchPokemon(value) {
  return async function (dispatch) {
    try {
      const response = await axios(`${BACK_LINK}/pokemon?name=${value}`);
      const result = response.data;
      dispatch({
        type: SET_SEARCH_LIST,
        payload: result,
      });
    } catch (error) {
      dispatch({
        type: ERROR,
        payload: error.message,
      });
    }
  };
}

export function bringTypes() {
  return async function (dispatch) {
    try {
      const response = await axios.get(`${BACK_LINK}/types`);
      const json = response.data;
      dispatch({
        type: BRING_TYPES,
        payload: json,
      });
    } catch (error) {
      dispatch({
        type: ERROR,
        payload: error.message,
      });
    }
  };
}

export function bringPokemonByType(type) {
  return async function (dispatch) {
    try {
      const response = await axios.get(
        `${BACK_LINK}/filter/by_type?type=${type}`
      );
      const json = response.data;
      dispatch({
        type: POKEMON_FILTER,
        payload: json,
      });
    } catch (error) {
      dispatch({
        type: ERROR,
        payload: error.message,
      });
    }
  };
}

export function postPokemon(payload) {
  return async function (dispatch) {
    try {
      const json = await axios.post(`${BACK_LINK}/pokemon`, payload);
      return json;
    } catch (error) {
      dispatch({
        type: ERROR,
        payload: error.message,
      });
    }
  };
}

export function bringDetail(id) {
  return async function (dispatch) {
    try {
      const response = await axios(`${BACK_LINK}/pokemon/${id}`);
      const detail = response.data;
      dispatch({
        type: BRING_DETAIL,
        payload: detail,
      });
    } catch (error) {
      dispatch({
        type: ERROR,
        payload: error.message,
      });
    }
  };
}

export function clearDetail() {
  return async function (dispatch) {
    try {
      dispatch({
        type: BRING_DETAIL,
        payload: {},
      });
    } catch (error) {
      dispatch({
        type: ERROR,
        payload: error.message,
      });
    }
  };
}
