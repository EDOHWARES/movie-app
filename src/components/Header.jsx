import React from 'react';
import logo from "../assets/tv.png";
import {BiSearchAlt} from "react-icons/bi";
import {HiMenuAlt4} from "react-icons/hi";
import {LiaTimesSolid} from "react-icons/lia";

const Header = (props) => {

    const [showNav, setShowNav] = React.useState(false)
  return (
    <>
    <header className='hidden md:flex absolute w-screen items-center justify-between px-6 py-4 text-white'>
        <a href='#' className='flex items-center space-x-3'>
            <img src={logo} alt="" className='w-[50px] h-[50px]' />
            <p className='text-[24px] font-bold'>MovieBox</p>
        </a>
        <div className='flex items-center border rounded-[6px] px-[10px] py-[6px] text-white text-[16px] space-x-16'>
            <input type="search" placeholder='What do you want to watch ?' 
            className='bg-transparent w-full h-full outline-none border-none placeholder:text-white'
            />
            <span className='cursor-pointer'>
            <BiSearchAlt className='text-white' />
            </span>
        </div>
        <div className='flex space-x-2 items-center text-white font-bold'>
            <a href="#">Sign in</a>
            <span className='bg-rose-700 rounded-full p-2 font-bold cursor-pointer'>
                <HiMenuAlt4 className='cursor-pointer' />
            </span>
        </div>
    </header>


    <header className='absolute md:hidden text-white items-center px-6 py-4 flex justify-between w-full'>

    <a href='#' className='flex items-center space-x-2'>
            <img src={logo} alt="" className='w-[50px] h-[50px]' />
            <p className='text-xl font-bold'>MovieBox</p>
        </a>

        <span onClick={props.handleShowSearch} className='bg-rose-700 p-2 rounded-full hover:bg-rose-500 duration-500 cursor-pointer'>
        <BiSearchAlt className='md:hidden' />
        </span>

        <span onClick={() => setShowNav(!showNav)} className={`${showNav ? "hidden" : "flex"} bg-rose-700 hover:bg-rose-400 duration-500 rounded-full h-fit p-2 font-bold cursor-pointer`}>
                <HiMenuAlt4 className='cursor-pointer' />
            </span>

            <span onClick={() => setShowNav(!showNav)} className={`${showNav ? "flex" : "hidden"} bg-rose-700 hover:bg-rose-400 duration-500 rounded-full h-fit p-2 font-bold cursor-pointer`}>
                <LiaTimesSolid className={`cursor-pointer ${showNav ? "flex" : "hidden"}`} />
            </span>

        <nav id='mobileNav' className={`${showNav ? "flex" : "hidden"} items-center justify-center absolute right-0 top-14 bg-blue-900 py-20 px-20`}>
            <ul className='space-y-10 text-center'>
                <li className="border-b-2 border-transparent hover:border-b-2 hover:border-white cursor-pointer duration-500">Home</li>
                <li className="border-b-2 border-transparent hover:border-b-2 hover:border-white cursor-pointer duration-500">Movies</li>
                <li className="border-b-2 border-transparent hover:border-b-2 hover:border-white cursor-pointer duration-500">Sign in</li>
                <li className="border-b-2 border-transparent hover:border-b-2 hover:border-white cursor-pointer duration-500">Sign up</li>
            </ul>
        </nav>

    </header>
    </>
  )
}

export default Header
