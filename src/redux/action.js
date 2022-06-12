import { SET_POST, SET_POST_COUNT, SET_CURRENT_ID } from "./constant";

export const setPosts = (req) => async (dispatch) => {
  dispatch({ type: SET_POST, params: { req: req } });
};
export const setPostsCount = (req) => async (dispatch) => {
  dispatch({ type: SET_POST_COUNT, params: req });
};
export const setCurrentId = (req) => async (dispatch) => {
  dispatch({ type: SET_CURRENT_ID, params: req });
};
