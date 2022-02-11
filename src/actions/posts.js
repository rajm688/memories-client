import * as api from "../api/index.js";
//action creaters are functions that returns actions
// actions are js objects that tells what just happened  and contains type and payload

export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();
    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
