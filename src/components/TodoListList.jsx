

const TodoListList = ({task, index, tasks, setTasks}) => {
 
    const removeTask = (index) => {
        const removedTask = tasks.filter((_,i) => i !== index)
        setTasks(removedTask)
    }

    const moveUp = (index) => {
        if (index > 0) {
            const movedTasks = [...tasks];
            [movedTasks[index-1], movedTasks[index]]=[movedTasks[index], movedTasks[index-1]]
            setTasks(movedTasks)
        }
    }

    const moveDown = (index) => {
        if (index < tasks.length -1){
            const movedTasks = [...tasks];
            [movedTasks[index+1], movedTasks[index]]=[movedTasks[index], movedTasks[index+1]]
            setTasks(movedTasks)
        }
    }
    return(
        <div style={{display:"flex", alignItems:"center", justifyContent:"space-around"}}>
            <span>{task}</span>
            <div>
                <button onClick={() => removeTask(index)}>Delete</button>
                <button onClick={() => moveUp(index)}>Up</button>
                <button onClick={() => moveDown(index)}>Down</button>
            </div>
        </div>
    )
}

export default TodoListList