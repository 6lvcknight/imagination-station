import React from 'react'
import { easeInOut, motion } from 'framer-motion'

const TransitionEffect = () => {
  return (
    <>
<motion.div className='fixed top-0 bottom-0 h-screen z-30 w-full duration-700 delay-300 bg-black'
    initial={{x:"100% , width:100%"}} 
    animate={{x:0 , width:"0"}}
    // Transition={{ ease:"easeInOut"}} 
    />
    <motion.div className='fixed top-0 bottom-0 h-screen z-40 w-full duration-700 delay-200 bg-white'
    initial={{x:"100% , width:100%"}} 
    animate={{x:0 , width:"0"}}
    // Transition={{ ease:"easeInOut"}} 
    />
    <motion.div className='fixed top-0 bottom-0 h-screen z-50 w-full duration-700 delay-100 bg-blue-300'
    initial={{x:"100% , width:100%"}} 
    animate={{x:0 , width:"0"}}
    // Transition={{ ease:"easeInOut"}} 
    />
        </>
  )
}


export default TransitionEffect
