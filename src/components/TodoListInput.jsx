import { useState } from "react"


const TodoListInput = ({tasks, setTasks}) => {

    const [newTask, setNewTask] = useState("")

    const addTask = () => {
        setTasks([...tasks, newTask])
        setNewTask("")    
        console.log(tasks)
    }

    return(
        <div style={{display:"flex", justifyContent:"center", marginBottom:"20px"}}>
            <input 
                style={{padding: "10px", fontSize:"16px", border:"none", borderRadius:"5px", width:"70%", marginRight: "10px"}}
                type="text"
                placeholder="Enter a Task"
                value = {newTask} 
                onChange={(e) => setNewTask(e.target.value)}
            />
            <button 
                style={{padding:"10px 20px", fontSize:"16px", border:"none", borderRadius:"5px", backgroundColor:"green", color:"white", cursor:"pointer"}}
                onClick={addTask}
            >Add</button>
        </div>
    )
}

export default TodoListInput