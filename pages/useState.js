import { useState } from 'react'

export default function () {
    const [count, setCount] = useState(1);
    return (
        <h3>
            hello page1 
            你点击了{count} 次
            <button onClick={()=>{setCount(count +1)}}>click me</button>
            <Test />
        </h3>
    )
}

function Test(){
    return (
        <div>
            123
        </div>
    )
}
