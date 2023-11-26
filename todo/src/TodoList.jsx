import { useState } from "react"
import {v4 as uuidv4} from 'uuid';


export default function TodoList(){
    let [Todos,setTodos] = useState([{task: "sample-task", id:uuidv4()}]);
    let [newTodo, setNewTodo] = useState("")
    //* initializing the useState  empty array 

    let addNewTask= () =>{
        setTodos((prevTodos)=>{
            return [...prevTodos, {task:newTodo, id:uuidv4()}]
        });
    }

    let updateTodoValue= (event) => {
    setNewTodo(event.target.value)
    };

    // this function is use to trigger the update in the todo values 

    let deleteTodo = (id) =>{
         setTodos( (prevTodos)=> Todos.filter((prevTodos)=> prevTodos.id!=(id)));
    }
    

    let upperCaseAll = () =>{
        setTodos((prevTodos) => (Todos.map((prevTodos)=>{
            return {
                ...prevTodos,
                task: prevTodos.task.toUpperCase()
            }
        })
        ));
    }
    //* function to update all the element to upperList 

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
             <li key={todo.id}>
                <span>{todo.task}</span>
                &nbsp; &nbsp; &nbsp; &nbsp;
                <button onClick={() => deleteTodo(todo.id)}>delete</button>
             </li>
           ))
           // in case if we  use the normal parenthesis then we dont have wirte the return statement but if we use curly braces then we have write the return keyboard 
        }
     </ul>

     <button onClick={upperCaseAll}>UpperCase</button>
    </div>
    )
};

// react states that whenever we have an list item then we  must an key property associated with that item that is basically the unique idntifier

// it will help us in function like deleting the item and in  searching that particular items 


// for that particular use we will use uuid  package for uniques id generator 