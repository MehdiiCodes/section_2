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

        <input className='border block w-full p-3 mt-4' 
        onChange={ ( e ) => { console.log(e.target.value);
         }} type="text" />

         <input className='border block w-full p-3 mt-4'
         placeholder='Press any Key'
          onKeyDown={ (e) => {console.log(e.code);
          } } type="text" />

          <input type="color"
          onChange={(e) => {console.log( document.body.style.backgroundColor = e.target.value );
          }}
          />

          <input
          onChange={() => {console.log(e.target.files);
          }}
          type="file" />

        </div>

    </div>
  )
}

export default EventHandling