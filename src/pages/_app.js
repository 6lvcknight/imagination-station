import '@/styles/globals.css'
import { motion ,AnimatePresence } from 'framer-motion'
import { Router } from 'next/router'

export default function App({ Component, pageProps }) {
  return(
  <AnimatePresence mode='wait'>
    <motion.div
    key={Router.route}
    initial="initialState"
    animate="animateState"
    exit="exitState"
    transition={{
      duration:1,
    }}
    variants={{
      initialState:{
        opacity:0,
        y:20,
      },
      animateState:{
        opacity:1,
        y:0,
      },
      exitState:{
        opacity:0,
        y:20,
      },
    
    }
    }
    className='h-full w-full bg-red-500'>
    <Component {...pageProps} />
    </motion.div>
  </AnimatePresence> )
}
