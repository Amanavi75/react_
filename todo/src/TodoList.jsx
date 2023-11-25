import { useState } from "react"
export default function TodoList(){
    let [Todos,setTodos] = useState(["sample Task"]);
    let [newTodo, setNewTodo] = useState("")
    //* initializing the useState  empty array 

    let addNewTask= () =>{
        setTodos([...Todos, newTodo]);
    }

    let updateTodoValue= (event) => {
    setNewTodo(event.target.value)
    };

    // this function is use to trigger the update in the todo values 
    


    //* here onchange is used to trigger the change , whenever there will be any change in the todovalue this change will trigger 

    return (
        <div>
            <input placeholder='add your task' 
            value={newTodo} onChange={updateTodoValue}></input>
            <br></br>      
     <button onClick={addNewTask}>add task</button>
     <br></br>
     <br></br>
     <br></br>
     <h4>TodoList</h4> 
     <ul>
        {
           Todos.map((todo)=>(
             <li>{todo}</li>
           ))
           // in case if we  use the normal parenthesis then we dont have wirte the return statement but if we use curly braces then we have write the return keyboard 
        }
     </ul>
    </div>
    )
}