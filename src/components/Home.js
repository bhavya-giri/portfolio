import React from 'react'
import Envelope from '../assets/Envelope.png';
import Typewriter from 'typewriter-effect'
const Home = () => {
  return (
    <div className='flex flex-col justify-center items-center h-screen'>
      
   <h1 className='text-6xl md:text-7xl font-black mb-5 text-center'>
   <Typewriter onInit={(typewriter)=>{
        typewriter.typeString("hi, Bhavya here").start();
      }}/>
   </h1>
   
    <p className='text-3xl md:text-5xl'> I create stuff sometimes.</p>
  
    <a href='mailto: bhavya.giri@gmail.com' className='mt-24 border-solid border-2 border-black hover:cursor-pointer w-56 relative'>
        <img className='h-12 w-12 relative left-1' src={Envelope} alt=''/>
        <p className=' text-3xl absolute top-1 right-2' >Contact me</p>
    </a>
  </div>
  )
}

export default Home