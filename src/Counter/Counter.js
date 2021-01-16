
import './Counter.scss';
import React, { useState } from 'react';

function Counter () {

    const [counter, setCounter] = useState(0);

    function increase () {
        setCounter(counter + 1);
    }

    return (
        <div>
            <button onClick={increase}>Increase</button>
            {counter}
        </div>
    );
}

export default Counter;