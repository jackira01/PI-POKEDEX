import axios from "axios";
const BACK_LINK = process.env.REACT_APP_BACK_LINK;

export function postUser(payload) {
  return async function (dispatch) {
    try {
      const json = await axios.post(
        `${BACK_LINK}/login/signup`,
        payload
      );
      return json;
    } catch (error) {
      dispatch({
        type: "ERROR",
        payload: error.message,
      });
    }
  };
}
