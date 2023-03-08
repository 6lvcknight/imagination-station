import React from 'react'
import { useRef } from 'react';
import Home from './Home'
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import 'locomotive-scroll/dist/locomotive-scroll.css'

const App = () => {
    const containerRef = useRef(null)
  return (
    <div className='App'>
        <LocomotiveScrollProvider
  options={
    {
      smooth: true,
      // ... all available Locomotive Scroll instance options 
    }
  }
  watch={
    [
      //..all the dependencies you want to watch to update the scroll.
      //  Basicaly, you would want to watch page/location changes
      //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
    ]
  }
  containerRef={containerRef}
>
  <main className='App' data-scroll-container ref={containerRef}>
    {/* ...your app */}
    <Home />
    {/* <About /> */}
    {/* <CreekHaven /> */}
    {/* <HorizntalGallery /> */}

  </main>
</LocomotiveScrollProvider>
    </div>
  )
}

export default App