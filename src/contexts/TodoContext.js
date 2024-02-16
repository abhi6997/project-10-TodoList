import { createContext,useContext } from "react"



const TodoContext = createContext({
  todos:[{
    id:1,
    todo:"Todo Msg",
    completed:false,
  }],
  addTodo:(todo)=>{},
  updateTodo:(id,todo)=>{},
  toggleComplete:(id)=>{},
  deleteTodo:()=>{}


});

export const TodoContextProvider = TodoContext.Provider;

export const useTodo =()=>{
    return  useContext(TodoContext)
}
