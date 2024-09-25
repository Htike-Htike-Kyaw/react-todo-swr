import React, { useContext, useState } from 'react'
import useCounterStore from '../store/useCounterStore'

const Counter = () => {
    // const [count, setCount] = useState(7);
    console.log(useCounterStore());

    const { count, resetCount, increaseCount, decreaseCount } = useCounterStore();

    const handleReset = ()=>{
        // setCount(0);
        resetCount();
    }

    const handleIncreasement = ()=>{
        // setCount(count + 1);
        increaseCount(5);
    }

    const handleDecreasement = ()=>{
        // setCount(count - 1);
        decreaseCount();
    }

  return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-2xl font-bold mb-4">
            Counter: {count}
            </h1>
        <div className="space-x-4">
        <button
            className="px-4 py-2 bg-blue-500 text-white rounded"
            // onClick={() => setCount(count + 1)}
            onClick={handleIncreasement}
        >
            Increment
        </button>
        <button
            className="px-4 py-2 bg-red-500 text-white rounded"
            // onClick={() => setCount(count - 1)}
                onClick={handleDecreasement}
        >
            Decrement
        </button>
        <button
            className="px-4 py-2 bg-gray-500 text-white rounded"
            // onClick={() => setCount(0)}
            onClick={handleReset}
        >
            Reset
        </button>
        </div>
    </div>
  )
}

export default Counter