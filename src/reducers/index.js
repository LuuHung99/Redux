import {combineReducers} from 'redux';
import  {todoReducer} from '../pages/TodoRedux/reducers/todo-reducer';

const rootReducer = combineReducers({ //Gop nhieu reducer thanh 1
    todo: todoReducer
})

export default rootReducer;
// Sau nay se truyen luu vao store