import React from 'react'

const Home = () => {
  return (
    <div>
      <h1 className='text-center my-5 text-3xl font-bold'>
        Home Page
      </h1>
      <p style={{ color: 'red', fontSize: 50, fontWeight: 'bold', textAlign: 'center' }}>JSX is the combination of JS and HTML.</p>

      <input type="text" />
      <br />
      <br />
     
     <button className='global-btn rounded'>Home Button</button>

     <img src="globe.svg" className='size-16' alt="" />
   
    </div>
  )
}

export default Home