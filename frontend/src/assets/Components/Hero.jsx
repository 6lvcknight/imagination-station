import React from 'react'

const Hero = () => {
  return (
    <>
      <div>
        <div className='h-screen w-full items-center justify-center z-0 flex flex-col absolute top-0'>
          <div className='flex flex-col justify-center items-center w-full '>
            <h1 className='md:text-5xl text-2xl font-mono px-10 '>Make Your Dreams Come True</h1>
            <div className="mt-3">
              <p className='mt-5 px-10'>
                A land built completely to make your favourite storytime real
              </p>

              <div className='mt-3 flex gap-4 justify-center'>
                <a 
                  href="/create" 
                  className='rounded shadow-lg bg-white py-2 px-6 hover:scale-105 active:scale-90 duration-700'
                >
                  Make my Own
                </a>
                <a 
                  href="/posts" 
                  className='rounded shadow-lg bg-white py-2 px-6 hover:scale-105 active:scale-90 duration-700'
                >
                  See Another Story
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </> 
  )
}

export default Hero