import { useState } from "react"

const Counter = () => {

    const [count, setCount] = useState(0)

    const increment = () => setCount(count+1)
    const decrement = () => setCount(count-1)
    const reset = () => setCount(0)
    return(
        <div className="counterContainer">
            <h1>Counter : <span className="counterSpan">{count}</span> </h1>
            <button onClick={increment} className="counterButton">Increment</button>
            <button onClick={decrement} className="counterButton">Decrement</button>
            <button onClick={reset}className="counterButton">reset</button>
        </div>
    )
}

export default Counter