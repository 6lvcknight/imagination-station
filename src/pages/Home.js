import Favorites from '@/Components/Favorites'
import Hero from '@/Components/Hero'
import Navbar from '@/Components/Navbar'

import React from 'react'

const Home = () => {
  return (
    <div className='min-h-[100vh] w-full bg-yellow-200 flex flex-col justify-center items-center'>
        <Navbar />
      <Hero />
      <Favorites />
    </div>
  )
}

export default Home