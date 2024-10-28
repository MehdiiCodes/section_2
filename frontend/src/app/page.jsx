import Card from '@/components/Card'
import MyButton from '@/components/MyButton'
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

     <div className='m-10 w-1/2'>

          <Card title="Card Title 1" description="Card 1 description" />
          <Card title="Card Title 2" description="Card 2 description" />
          <Card title="Card Title 3" description="Card 3 description" />
          <Card title="Card Title 4" description="Card 4 description" />
          <Card title="Card Title 5" description="Card 5 description" />
          <Card title="Card Title 6" description="Card 6 description" />

          <MyButton disabled={true}>Submit</MyButton>


     </div>
   
    </div>
  )
}

export default Home