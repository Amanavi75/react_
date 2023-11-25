import { useState } from "react"
export default function TodoList(){
    let [Todos,setTodos] = useState(["sample Task"]);
    //* initializing the useState empty array 
    return (
        <div>
            <input placeholder='add your task'></input>
            <br></br>      
     <button>add task</button>
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