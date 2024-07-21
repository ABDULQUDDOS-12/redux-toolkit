import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos:[{id:1,text:"Hello world"}],
}

export const todoSlice = createSlice({
   name: 'todo',
   initialState,
   reducers:{
    addTodo:(state,action)=>{
        const todo = {
               id:nanoid(),
             text:action.payload,
            }
            state.todos.push(todo);
    },
    removeTodo:(state,action)=>{
        state.todos = state.todos.filter((todo)=>todo.id!==action.payload)
    },
    editTodo:(state,action)=>{
        const todo = state.todos.find((todo) => todo.id === action.payload.id);
      if (todo) {
        todo.text = action.payload.text;
      }
    },
    completeTodo:(state,action)=>{
        const todo = state.todos.find((todo) => todo.id === action.payload);
        if (todo) {
          todo.completed = !todo.completed;
        }  
      },
   }
})

export const {addTodo,removeTodo,editTodo,completeTodo} = todoSlice.actions;
export default todoSlice.reducer;