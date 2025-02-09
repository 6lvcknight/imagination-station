import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import{ BsHandIndexThumb} from 'react-icons/bs';
import { motion, AnimatePresence } from "framer-motion";

export const Navbar = () => {
    const [ isOpen, setNav] = useState(false);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden"; 
        } else {
            document.body.style.overflow = "auto";
        }
        
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isOpen]);

    return ( 
        <>
            <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
                    <NavLink to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <span class="self-center text-2xl font-semibold whitespace-nowrap text-black">Imagination Station</span>
                    </NavLink>
                    <div class="flex items-center space-x-6 rtl:space-x-reverse">
                        <div className='duration-1000'>
                            <button onClick={()=> setNav(!isOpen)}>
                                <BsHandIndexThumb className='hover:animate-bounce' size={23}/>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
            {/* Animated Fullscreen Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ y: "-100%", opacity: 0 }}
                        animate={{ y: "0%", opacity: 1 }}
                        exit={{ y: "-100%", opacity: 0 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="fixed inset-0 bg-slate-200 flex flex-col bg-yellow-200 justify-center items-center overflow-hidden font-mono z-[100]"
                    >
                        <NavLink 
                            className="text-[5vw] hover:text-white hover:scale-110 active:scale-90 duration-700"
                            to="/" 
                            onClick={() => setNav(false)}
                        >
                            Home
                        </NavLink>
                        <NavLink 
                            className="text-[5vw] hover:text-white hover:scale-110 active:scale-90 duration-700"
                            to="/create" 
                            onClick={() => setNav(false)}
                        >
                            Create
                        </NavLink>
                        <NavLink 
                            className="text-[5vw] hover:text-white hover:scale-110 active:scale-90 duration-700"
                            to="/posts" 
                            onClick={() => setNav(false)}
                        >
                            Stories
                        </NavLink>
                        <NavLink 
                            className="text-[5vw] hover:text-white hover:scale-110 active:scale-90 duration-700"
                            to="/login" 
                            onClick={() => setNav(false)}
                        >
                            Login
                        </NavLink>
                    </motion.div>
                )}
            </AnimatePresence>    
        </>
    )
}
