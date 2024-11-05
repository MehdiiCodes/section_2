import React from 'react'

const TodoList = () => {
  return (
    <div className='bg-gray-300 h-screen pt-10'>
        <h1 className='text-center font-bold text-4xl my-5'>TodoList</h1>
        <div className='container mx-auto shadow rounded-lg bg-white'>

            <div className='p-5 border-b-2'>
                <input type="text"  className='border-2 px-4 py-2 w-full'
                placeholder='Enter a task to add'/>
            </div>
            <div className='p-5'>

            </div>

        </div>
    </div>
  )
}

export default TodoList