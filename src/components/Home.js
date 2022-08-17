import React from 'react'
import Envelope from '../assets/Envelope.png';
const Home = () => {
  return (
    <div className='w-1/2 left-20 absolute top-1/3'>
   <h1 className='text-7xl pb-6'>
    hi, Bhavya here.
   </h1>
    <p className='text-5xl'> I create stuff sometimes.</p>
    <div className='mt-24 border-solid border-2 border-black hover:cursor-pointer w-56 relative'>
        <img className='h-12 w-12  flex-1 relative left-1' src={Envelope} alt=''/>
        <p className='flex-1 text-3xl absolute top-1 right-2' >Contact me</p>
    </div>
  </div>
  )
}

export default Home