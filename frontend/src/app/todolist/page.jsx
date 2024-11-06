'use client';
import React, { useState } from 'react'

const TodoList = () => {

    // let count = 0;
    // const [count, setCount] = useState(0);
    const [taskList, setTaskList] = useState([
        { text: 'doodh lao', completed: false },
        { text: 'khana khao', completed: false },
        { text: 'code likho', completed: false },
        { text: 'code commit kro', completed: false },
    ]);

    const addNewTask = (e) => {
        if (e.code === 'Enter') {
            console.log(e.target.value);
            
            e.target.value = '';
        }
    }

  return (
    <div className='bg-gray-300 h-screen pt-10'>
        <h1 className='text-center font-bold text-4xl my-5'>ToDoList</h1>
        <div className='container mx-auto shadow rounded-lg bg-white'>

            {/* <h1 className='text-5xl'>
                {count}
            </h1> */}

            {/* <button onClick={() => { setCount(count + 1); console.log(count);}}>Add Count</button> */}

            <div className='p-5 border-b-2'>
                <input type="text"  className='border-2 px-4 py-2 w-full'
                placeholder='Enter a task to add'
                onKeyDown={ addNewTask }
                />
            </div>
            <div className='p-5'>

                {
                    taskList.map((task) => {
                        return <div className='border p-3 rounded mb-4 shadow-lg'>
                            <p className='text-xl'>{task.text}</p>
                        </div>
                    })
                }

            </div>

        </div>
    </div>
  )
}

export default TodoList