import * as types from "../actions/types";

const initState = {
    dataTodo: [],
};

export const todoReducer = (state = initState, action) => {
  switch (action.type) {
    case types.ADD_TODO:

        return {
          ...state,
          dataTodo: action.data
        };
     
    case types.UPDATE_TODO:
      return {
        ...state
      };
    case types.DELETE_TODO:
      const newId = action.id
      //Lay ra item bi xoa
      const datas = state.dataTodo.filter(e => e.id === newId)[0];
      //Lay ra toan bo item con lai trong list
      const totalItem = state.dataTodo.filter(e => e.id !== datas)
      return {
        ...state,
        dataTodo: totalItem,
      }
    default:
      return state;
  }
};
