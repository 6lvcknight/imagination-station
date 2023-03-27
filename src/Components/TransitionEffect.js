import React from 'react'
import { easeInOut, motion } from 'framer-motion'

const TransitionEffect = () => {
  return (
    <>
<motion.div className='fixed top-0 bottom-0 h-screen z-50 w-full duration-700  bg-black'
    initial={{x:"100% , width:100%"}} 
    animate={{x:0 , width:"0"}}
    // Transition={{ ease:"easeInOut"}}
    
    />
        </>
  )
}


export default TransitionEffect
