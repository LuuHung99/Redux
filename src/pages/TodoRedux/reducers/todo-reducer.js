import * as types from "../actions/types";

const initState = {
    dataTodo: [],
    byIds: {}
};

export const todoReducer = (state = initState, action) => {
  switch (action.type) {
    case types.ADD_TODO:
      return {
        ...state,
      };
    case types.UPDATE_TODO:
      return {
        ...state,
      };
    case types.DELETE_TODO:
      return {
        ...state,
      };
    default:
      return state;
  }
};
