import { SET_POST, SET_POST_COUNT, SET_CURRENT_ID } from "./constant";

const initialState = {
  posts: {},
  totalPost: 0,
  currentId: 0,
};

export default function store(state = initialState, action) {
  switch (action.type) {
    case SET_POST: {
      return {
        ...state,
        posts: { ...action.params.req },
      };
    }
    case SET_POST_COUNT: {
      return {
        ...state,
        totalPost: action.params,
      };
    }
    case SET_CURRENT_ID: {
      return {
        ...state,
        currentId: action.params,
      };
    }
    default:
      return state;
  }
}
