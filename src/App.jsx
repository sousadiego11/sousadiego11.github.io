import React, { useState } from 'react'

export function App() {
    const [count, setCount] = useState(0)
    console.log("🚀 ~ file: App.js ~ line 5 ~ App ~ count", count)
    
    return (
        <>
            <div>{count}</div>
            <button onClick={() => setCount((prev) => prev + 1)}>Count</button>
        </>
    )
}