import React from 'react'
import Card from './Card'

const Favorites = () => {
  return (
    <div className='w-full h-screen  flex items-center justify-center absolute top-0 overflow-hidden'>
      <div className='w-full h-32 top-0 absolute bg-gradient-to-b from-yellow-200' />
      <div className='w-full h-32 bottom-0 absolute bg-gradient-to-t from-yellow-200' />
      <div className='grid grid-rows-2 md:grid-cols-1 grid-flow-col gap-4'>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        </div>
    </div>  
  )
}

export default Favorites