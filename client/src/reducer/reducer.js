import {
  BRING_DETAIL,
  BRING_POKEMONS,
  BRING_TYPES,
  ERROR,
  POKEMON_FILTER,
  SET_RENDER,
  SET_SEARCH_LIST,
} from '../actions/actions';

export const initialState = {
  pokemons: [],
  searchList: [],
  types: [],
  filter: [],
  render: [],
  detail: [],
  favorites: [],
  error: '',
};

export function rootReducer(state = initialState, action) {
  switch (action.type) {
    case BRING_POKEMONS:
      return {
        ...state,
        pokemons: action.payload,
      };

    case SET_SEARCH_LIST:
      return {
        ...state,
        searchList: action.payload,
      };

    case BRING_TYPES:
      return {
        ...state,
        types: action.payload,
      };

    case POKEMON_FILTER:
      return {
        ...state,
        filter: action.payload,
      };

    case BRING_DETAIL:
      return {
        ...state,
        detail: action.payload,
      };

    case SET_RENDER:
      return {
        ...state,
        render: action.payload,
      };

    case ERROR:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return { ...state };
  }
}
