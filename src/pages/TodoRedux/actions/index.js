import * as types from "./types";

export const addTodo = (id, title) => ({
    type: types.ADD_TODO,
    id,
    title
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