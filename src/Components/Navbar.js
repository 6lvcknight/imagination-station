import Link from 'next/link'
import React, { useState } from 'react'
import{ BsHandIndexThumb} from 'react-icons/bs';



const Navbar = () => {
    const [isOpen,setNav] = useState(false);
  return (
    <div className='w-full   relative duration-1000'>
    <div className='w-full absolute top-4 duration-1000 '>
        <div className='top-4 fixed right-40'>
            <button onClick={()=> setNav(!isOpen)} className='hover:bg-black/10 p-4 rounded-full'>
             <BsHandIndexThumb className='hover:animate-bounce ' size={30}/>
            </button>
        </div>
    </div>
    {isOpen &&(
    <div className='w-full h-screen bg-slate-200 flex flex-col justify-center items-center overflow-hidden font-mono duration-1000'>
        <Link className='text-[5vw] hover:text-white hover:scale-110 active:scale-90 duration-700' href="">Home</Link>
        <Link className='text-[5vw] hover:text-white hover:scale-110 active:scale-90 duration-700' href="">Create</Link>
        <Link className='text-[5vw] hover:text-white hover:scale-110 active:scale-90 duration-700' href="">Stories</Link>
        <Link className='text-[5vw] hover:text-white hover:scale-110 active:scale-90 duration-700' href="">Library</Link>
      

    </div>)}
    </div>
    
  )
}

export default Navbar