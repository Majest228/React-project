import React, { useState } from 'react';

const Counter = () => {
    const [counter, setCount] = useState(0);
    return (
        <div>
            <h2>Кол-во лайков : {counter}</h2>
            <button onClick={()=> setCount(counter + 1)}>Increment</button>
            <button onClick={()=> setCount(counter - 1)}>Decrement</button>

        </div>
    )
}

export default Counter