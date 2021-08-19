import React, { useState } from 'react';

const InputMsg = () => {
    const [value,setValue] = useState('');
    return (
        <div>
            <h2>{value}</h2>
            <input 
            type="text"
            value={value}
            onChange={(e)=> setValue(e.target.value) }
            />
        </div>
    ) 
}

export default InputMsg;