import { useState } from "react"



export default function Counter(){

    const [counter, setCounter] = useState(0)


    return <div>
        <h3>Counting: {counter}</h3>
        <button onClick={()=>{setCounter(counter + 10)}}>Move on!</button>
    </div>
}