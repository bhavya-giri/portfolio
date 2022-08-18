import React from 'react'
import Envelope from '../assets/Envelope.png';
import Typewriter from 'typewriter-effect'
const Home = () => {
  return (
    <div className='h-screen md:w-1/2  '>
      
   <h1 className='text-4xl md:text-7xl font-black mb-5 '>
   <Typewriter onInit={(typewriter)=>{
        typewriter.typeString("hi, Bhavya here").start();
      }}/>
   </h1>
   
    <p className='text-3xl md:text-5xl'> I create stuff sometimes.</p>
    <div className='mt-24 border-solid border-2 border-black hover:cursor-pointer w-56 relative'>
        <img className='h-12 w-12 relative left-1' src={Envelope} alt=''/>
        <p className=' text-3xl absolute top-1 right-2' >Contact me</p>
    </div>
  </div>
  )
}

export default Home