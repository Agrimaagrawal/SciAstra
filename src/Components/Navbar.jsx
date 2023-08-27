import logo from '../assets/Sciastralogo.png';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import {FaTimes} from 'react-icons/fa';
import {CiMenuFries} from 'react-icons/ci';

const Navbar = () => {
    const [click,setClick]=useState(false);
    const handleClick=()=>{
        setClick(!click)
    }
    
    const content=
    <>
    <div className='lg:hidden block absolute top-20 w-full left-0 right-0 bg-gradient-to-r from-fuchsia-600 to-purple-600 transition '>
    <ul className=' text-center text-xl p-10'>
                    
                        <li className='my-4 py-4 border-white border-2 rounded-lg text-white  hover:bg-slate-800 hover:rounded-sm'>For Employers</li>
                        <li className='my-4 py-4 border-white border-2 rounded-lg text-white  hover:bg-slate-800 hover:rounded-sm' >Couses</li>
                        <li className='my-4 py-4 border-white border-2 rounded-lg text-white  hover:bg-slate-800 hover:rounded-sm'>Selections</li>
                        <li className='my-4 py-4 border-white border-2 rounded-lg text-white  hover:bg-slate-800 hover:rounded-sm ' >Blog</li>
                        <li className='my-4 py-4 border-white border-2 rounded-lg text-white  hover:bg-slate-800 hover:rounded-sm' >Teams</li>
                        <li className='my-4 py-4 border-white border-2 rounded-lg text-white  hover:bg-slate-800 hover:rounded-sm' >Contact Us</li>
                        <li className='my-4 py-4 border-white border-2 rounded-lg text-white  hover:bg-slate-800 hover:rounded-sm' >Login</li>
                    
                    
                    
                    
                </ul>

    </div>
    </>
  return (
    <>
    <div className='h-10vh flex justify-between z-50 px-10 lg:py-5 xl:px-40  py-2 flex-1 pb-0  '>
        
           <div className='w-16'><img src={logo} className="rounded-full"></img></div>
        
    
        <div className='lg:flex  lg:flex-1 items-center justify-around hidden'>
            <div className=' flex-10 justify-center items-center p-2 '>
                <ul className='flex gap-16'>
                    
                        <li className='text-xl hover:cursor-pointer font-poppins pl-7'>Home</li>
                        <li className='text-xl hover:cursor-pointer font-poppins' >Couses</li>
                        <li className='text-xl hover:cursor-pointer font-poppins'>Selections</li>
                        <li className='text-xl hover:cursor-pointer font-poppins ' >Blog</li>
                        <li className='text-xl hover:cursor-pointer font-poppins text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 ' >Teams</li>
                        <li className='text-xl hover:cursor-pointer font-poppins' >Contact Us</li>
                        <li className='text-xl hover:cursor-pointer  rounded-2xl text-white font-poppins bg-gradient-to-r from-fuchsia-600 to-purple-600 w-24 p-2 text-center' >Login</li>
                  
                        
                   
                    
                </ul>
            </div>
        </div>
        <div>
            {click &&content}
        </div>
        <button className='block lg:hidden transition ' onClick={handleClick}>
            {click ? <FaTimes size="2em"/> : <CiMenuFries size="2em"/>}
        </button>

    </div>
    </>
  )
}

export default Navbar
