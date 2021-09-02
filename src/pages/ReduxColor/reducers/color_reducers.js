import {CHANGE_COLOR} from '../actions/types';

const initialState = {
  colors: ''
};

export const colorReducer = (state = initialState, action) => {
  switch (action.type) {
    
    case CHANGE_COLOR: {
      return {
          ...state,
          colors: action.name
      };
    }
    default:
      return state;
  }
}