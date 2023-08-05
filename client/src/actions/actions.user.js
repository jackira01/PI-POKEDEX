import axios from "axios";

export const SET_FAVORITES = "SET_FAVORITES";

//el thunk lo uso solo si quiero hacer funciones asincronas

export function postFavorites(payload) {
  return async function (dispatch) {
    try {
      const json = await axios.post("http://localhost:3001/favorite", payload);
      return json;
    } catch (error) {
      dispatch({
        type: "ERROR",
        payload: error.message,
      });
    }
  };
}
