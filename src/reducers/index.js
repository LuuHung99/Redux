import {combineReducers} from 'redux';
import  {todoReducer} from '../pages/TodoRedux/reducers/todo-reducer';
import { colorReducer } from '../pages/ReduxColor/reducers/color_reducers';

const rootReducer = combineReducers({ //Gop nhieu reducer thanh 1
    colors: colorReducer,
    todo: todoReducer
})

export default rootReducer;
// Sau nay se truyen luu vao store