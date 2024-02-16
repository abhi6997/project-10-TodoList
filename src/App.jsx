import { useEffect, useState } from 'react'
import { TodoContextProvider } from './contexts/TodoContext.js'
import  TodoForm  from './components/TodoComponents/TodoForm.jsx'
import { TodoItem } from './components/TodoComponents/TodoItem.jsx'



function App() {
 const [todos,setTodos] = useState([])
  const addTodo=(todo)=>{
    setTodos((prev)=>[{...todo},...prev])
  }


  const updateTodo = (id,todo)=>{
  setTodos((prev)=>prev.map((prevTodo)=>(prevTodo.id===id ? todo :prevTodo )))

  }

  const deleteTodo = (id)=>{
    setTodos((prev)=>prev.filter((todo)=>todo.id!==id))
  }

  const toggleComplete = (id)=>{
    setTodos((prev)=>prev.map((prevTodo)=>prevTodo.id === id ?{...prevTodo,completed:!prevTodo.completed} :prevTodo))
  }


  useEffect(()=>{
   const todosFromLocalStorage = JSON.parse(localStorage.getItem("todos")) 
  if (todosFromLocalStorage && todosFromLocalStorage.length>0){
    setTodos(todosFromLocalStorage)
   }
  },[])

  useEffect(()=>{
    const check = localStorage.setItem("todos", JSON.stringify(todos))

    console.log(check)
},[todos])



  return (
    <TodoContextProvider value ={{todos,addTodo,updateTodo,toggleComplete,deleteTodo}}>
    <div className="w-screen h-screen  bg-cover bg-no-repeat" style={{backgroundImage:'url(https://images.pexels.com/photos/880989/pexels-photo-880989.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)'}}>
    <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
        <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
        <div className="mb-4">
            <TodoForm/>
        </div>
        <div className="flex flex-wrap gap-y-3">
            {todos.map((todo)=>(<div key={todo.id} className="w-full">
              <TodoItem todo = {todo}/>
            </div>))}
        </div>
    </div>
</div>
</TodoContextProvider>
  )
}

export default App
