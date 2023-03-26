
import React from 'react'
import Favorites from '@/Components/Favorites'
import Floor from '@/Components/Floor'
import Hero from '@/Components/Hero'
import Navbar from '@/Components/Navbar'
import LightBulb from '@/Components/LightBulb'
import { Canvas } from '@react-three/fiber'
import { Airplane } from '@/models/Airplane'
import { Airplane2 } from '@/models/Airplane2'
import Box from '@/Components/Box'
import { Float ,Cloud } from '@react-three/drei'





const Home = () => {



  return (
    <div className='min-h-[100vh] w-full bg-yellow-200 flex flex-col justify-center items-center'>
        <Navbar />
        {/* div for three.js elements  */}
        <div className='h-screen w-full relative '>
        <Canvas shadows className='z-0'
        camera={{
          position: [-6, 7, 7],
        }}>
         <ambientLight color={"white"} intensity={0.2} />
          <LightBulb position={[0, 8, 0]} />
            {/* <Box rotateX={3} rotateY={0.2} position={[2,2.5,-3]}  /> */}
            <Cloud
  opacity={0.9}
  speed={0.4} // Rotation speed
  width={10} // Width of the full cloud
  depth={1.5} // Z-dir depth
  segments={10} // Number of particles
/>
            <Float
            speed={1}//speed
            rotationIntensity={2}// rotation xyz
            floatIntensity={0.5}// up/down float range 
             floatingRange={[1,1]}> 
            <Airplane rotateX={3} position={[2,-2.5,-14]} scale={3.5} />
            <Airplane2 rotateX={3} position={[2,2.5,4]} scale={0.5}  />
            </Float>
  
        </Canvas>
        <Hero  className=''/>
        </div>
        <div className='h-screen w-full  relative'>
        <Canvas className='z-0'
        camera={{
          position: [-6, 7, 7],
        }}>
         <ambientLight color={"white"} intensity={0.2} />
          <LightBulb position={[0, 8, 0]} />
          <Float
            speed={1}//speed
            rotationIntensity={2}// rotation xyz
            floatIntensity={0.5}// up/down float range 
             floatingRange={[1,1]}>
            <Airplane position={[2,2.5,-3]} scale={3.5} />
            </Float>
            <Cloud 
        opacity={1}
        color={"ffffff"} />
          </Canvas>
        <Favorites />
        </div>
   
        
     
    </div>
  )
}

export default Home