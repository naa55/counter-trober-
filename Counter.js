import React, {useState} from 'react'

const Counter = () => {

    const [count, setCount] = useState(0)
    

  return (
    <div className='mt-24 justify-center mx-auto ml-24'>
        <div className='text-xl py-8 text-red-500'>{count < 0 ? 'User can not go below 0':''}</div>
        <div className='text-3xl py-8'>{count}</div>
        <div className='space-x-4'>
            <button className='bg-black p-2 text-white' onClick={() => setCount(count + 1)}>Increment</button>
            <button className='bg-black p-2 text-white' disabled={count === -1 ? true : false}  onClick={() => setCount(count - 1)}>Decrement</button>
        </div>
    </div>
  )
}

export default Counter
