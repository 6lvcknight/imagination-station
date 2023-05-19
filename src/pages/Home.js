import Transition from '@/Components/TransitionEffect'
import React from 'react'
import Favorites from '@/Components/Favorites'
import Hero from '@/Components/Hero'
import Navbar from '@/Components/Navbar'
import LightBulb from '@/Components/LightBulb'
import { Canvas } from '@react-three/fiber'
import { Float , Sparkles ,Stars } from '@react-three/drei'
import Footer from '@/Components/Footer'





const Home = () => {



  return (
    <div className='min-h-[100vh] w-full bg-black text-white flex flex-col justify-center items-center'>
        <Navbar />
        <Transition />
        {/* div for three.js elements  */}
        <div className='h-screen w-full relative '>
        <Canvas shadows className='z-0'
        camera={{
          position: [-6, 7, 7],
        }}>
         <ambientLight color={"white"} intensity={0.2} />
          <LightBulb position={[0, 8, 0]} />
            <Float
            speed={0.1}//speed
            rotationIntensity={2}// rotation xyz
            floatIntensity={0.5}// up/down float range 
             floatingRange={[1,1]}> 
           <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
           {/* <Sparkles count={3000} opacity={0.4} position={[0, 0, 0]} scale={13} size={1} speed={0.2}/> */}
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
            speed={0.1}//speed
            rotationIntensity={2}// rotation xyz
            floatIntensity={0.5}// up/down float range 
             floatingRange={[1,1]}>
             <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
            </Float>
           
          </Canvas>
        <Favorites />
        </div>
   <div >
   
   <Footer />
   </div>
        
     
    </div>
  )
}

export default Home