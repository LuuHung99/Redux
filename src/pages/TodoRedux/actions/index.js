import * as types from "./types";

export const getTodo = (val) => ({
    type: types.GET_TODO,
    val
})

export const addTodo = (data) => ({
    type: types.ADD_TODO,
    data
});

export const updateTodo = (id, title) => ({
    type: types.UPDATE_TODO,
    id, 
    title
});

export const deleteTodo = (id) => ({
    type: types.DELETE_TODO,
    id
})