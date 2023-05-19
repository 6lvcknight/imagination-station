import React from 'react'
import Link from 'next/link'

const Hero = () => {
  return (
        <>
           <div>
          <div className='h-screen w-full items-center justify-center z-0 flex flex-col absolute top-0'>
            <div className='flex flex-col justify-center items-center w-full '>
                <h1 className='md:text-5xl text-2xl font-mono px-10 '>Make your dreams come true</h1>
                <p className='mt-5 px-10'>A land built completely to make your favourite storytime real</p>
                <div className=' my-5 flex w-1/2  px-5 justify-between '> 
                <Link href="/Create" className='rounded shadow-lg bg-white py-1 px-4 hover:scale-105 active:scale-90 duration-700'> make my own </Link>
                <Link  href="/posts" className='rounded shadow-lg bg-white py-1 px-4 hover:scale-105 active:scale-90 duration-700'> see another childs </Link>
                </div>
            </div>
            
            <div className='w-full h-32 bottom-0 absolute bg-gradient-to-t from-black' />
          
             </div>
         </div>
        </>
      
        
    
  )
}

export default Hero