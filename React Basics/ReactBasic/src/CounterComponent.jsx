import React, {useState} from 'react';

function CounterComponent() {
    const [counter, setcounter] = useState(0);
    const incrementCount = () => {
        setcounter(counter + 1);
    }
    return (
    <>
        <div>
            <h3>your value = {counter}</h3>
            <button onClick={incrementCount}>Increment</button>
        </div>
    </>
    );
}

export default CounterComponent;