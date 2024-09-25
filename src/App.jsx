import React, { useState } from 'react'
import Heading from './components/Heading'
import CreateText from './components/CreateText'
// import TaskList from './components/TaskList'
import Counter from './components/Counter'
import useSWR, { useSWRConfig } from 'swr'
import Task from './components/Task'

const fetcher = (...args) => fetch(...args).then(res => res.json());

const App = () => {
  // const [tasks, setTask ] = useState([]);
  // console.log(import.meta.env.VITE_BASE_URL);

  const {data, error, isLoading} = useSWR(`${import.meta.env.VITE_BASE_URL}/tasks`, fetcher);
  const {mutate} = useSWRConfig();

  // if(isLoading === true){
  //   return 'loading';
  // }

const addTask = async (newTask)=>{
    // setTask([...tasks, newTask]);
  
    

    const res = await fetch(`${import.meta.env.VITE_BASE_URL}/tasks`, {  //post data to server
      method: "POST",
      header: {
        "Conent-type": "application/json",
      },
      body: JSON.stringify(newTask)
    })

    const data = await res.json();
    
    mutate(`${import.meta.env.VITE_BASE_URL}/tasks`);  //revalidation ( update to client )
}

const removeTask =async (id)=>{
  // setTask(tasks.filter(task => task.id !== id));

  const res = await fetch(`http://localhost:3000/tasks/${id}`, {
    method: "DELETE",
  })

  mutate("http://localhost:3000/tasks");
}

const doneTask =async (id, currentState)=>{
  // setTask(tasks.map(el => el.id === id ? { ...el, isDone: !el.isDone }: el));

  const res = await fetch(`http://localhost:3000/tasks/${id}`, {
    method: "PATCH",
    header: {
      "Conent-type": "application/json",
    },
    body: JSON.stringify({ isDone: !currentState })
  });

  mutate("http://localhost:3000/tasks");
}

  return (
    <div className='p-10'>
      {/* <Counter /> */}
      <Heading />
      <CreateText addTask={addTask} />
      {/* <TaskList doneTask={doneTask} removeTask={removeTask} tasks={data} isLoading={isLoading}  /> */}

      <div className="">
        {isLoading ? "Loading" : 
          <div className="">
              <h3 className='font-bold font-serif text-xl mb-3'>
                Task Lists (Total : { data.length }, 
                Done { data.filter( el => el.isDone).length })
              </h3>
              { data.map(el => {
                  return <Task doneTask={doneTask} removeTask={removeTask} key={el.id} job={el} />
              })}
          </div>
        }
      </div>
      
      
    </div>
  )
}

export default App