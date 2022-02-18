import axios from "axios";
import * as actions from "../api";

import { postsFiltered, postsSetUpvotes } from "../posts";

const api =
  ({ dispatch }) =>
  (next) =>
  async (action) => {
    if (action.type !== actions.apiCallBegan.type) return next(action);

    const { url, method, data, onStart, onSuccess, onError } = action.payload;

    if (onStart) dispatch({ type: onStart });

    next(action);

    try {
      const response = await axios.request({
        baseURL: "https://www.mocky.io/v2",
        url,
        method,
        data,
      });
      
      if (onSuccess) {
        dispatch({ type: onSuccess, payload: response.data.links });
        dispatch(postsFiltered(response.data.links));
        dispatch(postsSetUpvotes(response.data.links));
      }
    } catch (error) {
      //Geral
      dispatch(actions.apiCallFailed(error.message));
      //Específico
      if (onError) dispatch({ type: onError, payload: error.message });
    }
  };

export default api;
