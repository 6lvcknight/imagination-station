import React from 'react'
import Link from 'next/link'

const Hero = () => {
  return (
        <>
           <div>
          <div className='h-screen w-full items-center justify-center z-30 flex absolute top-0'>
            <div className='flex flex-col justify-center items-center w-full '>
                <h1 className='md:text-5xl text-2xl font-mono px-10 '>Make your dreams come true</h1>
                <p className='mt-5 px-10'>A land built completely to make your favourite storytime real</p>
                <div className=' my-5 flex w-1/2  px-5 justify-between '> 
                <Link href="/Create" className='hover:scale-110 active:scale-50 duration-700  px-5 py-2 bg-white rounded-2xl content-center'> make my own </Link>
                <Link  href="/posts" className='px-5 py-2 bg-white rounded-2xl  hover:scale-110 active:scale-50 duration-700'> see another childs </Link>
                </div>
            </div>
             </div>
         </div>
        </>
      
        
    
  )
}

export default Hero