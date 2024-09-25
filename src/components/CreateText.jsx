import React, { useState } from 'react'

const CreateText = ({ addTask }) => {
    const [ job, setJob ] = useState('');

    const onChangeHandler = (e)=>{
        setJob(e.target.value);
    }

    const handleAddTest = ()=>{
        const newTask = {
          // id: Date.now(),
          task: job,
          isDone: false
        }
        addTask(newTask);
        setJob('');
    }
  return (
    <div className='flex mb-5'>
        <input type="text" value={job} onChange={onChangeHandler} placeholder='add task' className=' border-2 border-slate-300 rounded-l-lg p-2 flex-grow' />
        <button onClick={handleAddTest} className='bg-slate-300 border-2 border-slate-300 rounded-r-lg py-2 px-4'>Add</button>
    </div>
  )
}

export default CreateText