

const TodoListList = ({task, index, tasks, setTasks}) => {
 
    const removeTask = (index) => {
        const removedTask = tasks.filter((task,i) => i !== index)
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


    const buttonStyle = {
        border: "none",
        borderRadius: "5px",
        padding: "5px 10px",
        marginLeft: "5px",
        fontSize: "14px",
        cursor: "pointer",
        color: "white"
      }

    return(
        <div style={{display:"flex", alignItems:"center", justifyContent:"space-between", backgroundColor: "white", color:"black", padding:"10px", borderRadius:"5px", marginBottom:"10px"}}>
            <span>{task}</span>
            <div>
                <button style={{...buttonStyle, backgroundColor:"red"}} onClick={() => removeTask(index)}>Delete</button>
                <button style={{...buttonStyle, backgroundColor:"blue"}} onClick={() => moveUp(index)}>Up</button>
                <button style={{...buttonStyle, backgroundColor:"blue"}} onClick={() => moveDown(index)}>Down</button>
            </div>
        </div>
    )
}

export default TodoListList