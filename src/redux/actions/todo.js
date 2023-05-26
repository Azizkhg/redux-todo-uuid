import { ADD_TODO ,DELETE_TODO,UPDATE_TODO} from "./action-types"

//add todo action
export const addTodo=(todo)=>({
    type:ADD_TODO,                          //type defines the type of action to be performed
    payload:todo                            //payload defines data to be passed to reducer function
})

export const deleteTodo=(id)=>({
    type:DELETE_TODO,
    payload:id
})

export const updateTodo=(todo,id)=>({
type:UPDATE_TODO,
payload:{todo:todo,todo:id}
})