import Navbar from '@/Components/Navbar'
import React from 'react'
import Transition from '@/Components/TransitionEffect'
import Card from '@/Components/Card'

const posts = () => {
  return (
    <div>
      <Navbar  />
      <div className='min-h-[100vh] w-full bg-black flex flex-col justify-center items-center'>
      <Transition />
      <div className='grid grid-rows-2 md:grid-cols-1 grid-flow-col gap-4'>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
     
  </div>
      </div>
      
      </div>
  )
}

export default posts