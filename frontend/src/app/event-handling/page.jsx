'use client'
import React from 'react'

const EventHandling = () => {
  return (
    <div>
        
        <div className='container mx-auto h-screen'>
            <h1 className='my-5 text-center font-bold text-3xl'>Event Handling</h1>

        <button className='mt-4 bg-black text-white p-3'
        onClick={() => { alert('button was clicked') }}
        >Click Event</button>

        </div>

    </div>
  )
}

export default EventHandling