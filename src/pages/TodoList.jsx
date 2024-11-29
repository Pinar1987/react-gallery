import { useState } from "react"
import TodoListInput from "../components/TodoListInput"
import TodoListList from "../components/TodoListList"

const TodoList  = () => {

    const [tasks, setTasks] = useState([])

    return(
        <div style={{backgroundColor: "blueviolet", color:"white", width:"90vw", height:"70vh", margin:"50px auto", padding:"20px", textAlign:"center"}}>
            <h1 style={{marginBottom:"20px"}}>Todo list</h1>
            <TodoListInput tasks = {tasks} setTasks= {setTasks}/>            
            {tasks.map((task, index) => (
                <TodoListList key={index} task={task} index={index}  tasks = {tasks} setTasks = {setTasks}/>
            ))}
            
            
        </div>
    )
}

export default TodoList