import React from 'react'

const Task = ({job: {id, task, isDone}, removeTask, doneTask}) => {

    const handleRemoveTask = ()=>{
        if(confirm('r u sure to delete')){
            removeTask(id);
        }
    }

    const handleOnChange = ()=>{
        doneTask(id, isDone)
    }

  return (
    <div className='border p-3 rounded-lg mb-3 last:mb-0 border-slate-300 flex justify-between items-center'>
        <div className="flex items-center gap-3">
            <input type="checkbox" className='size-4' onChange={handleOnChange} checked={isDone} />
            <p className={isDone? 'line-through' : ''}>{ task }</p>
        </div> 
        <button onClick={handleRemoveTask} className='bg-red-100 border-2 border-slate-300 border-r-lg py-2 px-4 rounded-lg text-sm text-red-700'>
            Delete
        </button>
    </div>
  )
}

export default Task