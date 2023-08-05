import { ERROR, POKEMON_FILTER } from "./actions";
import { filterByAscendingAlphabet } from "./filters.logic";

export function demoFilter(value) {
  return async (dispatch) => {
    try {
      const filter = await filterByAscendingAlphabet(value);
      if(filter.length){
        dispatch({
          type: POKEMON_FILTER,
          payload: filter,
        });
      }else {
        dispatch({
          type: POKEMON_FILTER,
          payload: 'No results',
        });
      }
      
    } catch (error) {
      dispatch({
        type: ERROR,
        payload: error.message,
      });
    }
  };
}

export function resetFilter() {
  return {
    type: POKEMON_FILTER,
    payload: [],
  };
}
