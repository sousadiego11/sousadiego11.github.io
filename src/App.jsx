import React, { useState } from 'react'
import favicon from './public/favicon.ico'

export function App() {
    const [count, setCount] = useState(0)
    console.log("🚀 ~ file: App.js ~ line 5 ~ App ~ count", count)
    
    return (
        <>
            <div>{count}</div>
				<img src={favicon} alt="favicon"/>
            <button onClick={() => setCount((prev) => prev + 1)}>Count</button>
        </>
    )
}
