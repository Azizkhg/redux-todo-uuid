import { ADD_TODO, DELETE_TODO, UPDATE_TODO } from "../actions/action-types";


const initialState = [];
export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      console.log("adding todo");
      
      return [...state, action.payload];
    case DELETE_TODO:
      console.log((todo)=>todo.id)
      const newstate = state.filter((todo) => todo.id !== action.payload);
      return newstate;
    case UPDATE_TODO:
      const UpdatedState = state.map((todo) => {
        console.log("update todo called");
        if (todo.id == action.payload.todoId) {
          todo.title = action.payload.todo.title;
          todo.description = action.payload.todo.description;
          return todo;
        }
        return todo;
      });
      return UpdatedState;
    default:
      return state;
  }
};
