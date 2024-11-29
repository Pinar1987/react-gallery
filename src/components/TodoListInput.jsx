import { useState } from "react"


const TodoListInput = ({tasks, setTasks}) => {

    const [newTask, setNewTask] = useState("")

    const addTask = () => {
        setTasks([...tasks, newTask])
        setNewTask("")    
        console.log(tasks)
    }

    return(
        <div>
            <input type="text"
                placeholder="Enter a"
                value = {newTask} 
                onChange={(e) => setNewTask(e.target.value)}
            />
            <button onClick={addTask}>Add</button>
        </div>
    )
}

export default TodoListInput