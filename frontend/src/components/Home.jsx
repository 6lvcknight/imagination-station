import React from 'react'
import Transition from '../assets/Components/TransitionEffect';
import Favorites from '../assets/Components/Favorites';
import Hero from '../assets/Components/Hero';
import LightBulb from '../assets/Components/LightBulb';
import { Canvas } from '@react-three/fiber'
import { Airplane } from '../assets/models/Airplane';
import { Airplane2 } from '../assets/models/Airplane2';
import { Float, Cloud } from '@react-three/drei'



const Home = () => {
  return (
    <div className='min-h-[100vh] w-full bg-yellow-200 flex flex-col justify-center items-center'>
      <Transition />
      {/* Three.js Canvas section */}
      <div className='h-screen w-full relative'>
        <Canvas shadows className='z-0' camera={{ position: [-6, 7, 7] }}>
          <ambientLight color="white" intensity={1} />
          <directionalLight
            color="white"
            intensity={1.2}
            position={[10, 10, 5]}
            castShadow
          />
          <LightBulb position={[0, 8, 0]} />
          <Cloud
            opacity={0.9}
            speed={0.4}    // Rotation speed
            width={10}     // Full cloud width
            depth={1.5}    // Z-dir depth
            segments={10}  // Number of particles
          />
          <Airplane rotateX={3} position={[2,-2.5,-14]} scale={3.5} />
          <Airplane2 rotateX={3} position={[2,2.5,4]} scale={0.5} />
        </Canvas>
        <Hero />
      </div>
      <div className='h-screen w-full relative'>
        <Favorites />
      </div>
    </div>
  )
}


export default Home;