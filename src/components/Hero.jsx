import React from 'react';
import bg from "../assets/Poster.png";
import imob from "../assets/imob.png";
import fruit from "../assets/fruit.png";
import {AiFillPlayCircle} from "react-icons/ai";

const Hero = () => {
  return (
    <div style={{backgroundImage: `url(${bg})`}} className='w-full h-[100vh] text-white bg-no-repeat bg-cover bg-center px-6 py-4 flex items-center justify-center'>
        <div className='space-y-4 pt-20 md:pt-0'>
        <div className=''>
            <h1 className='text-4xl md:text-5xl font-semibold'>John Wick 3: <br className='hidden md:block' /> Parbellum</h1>
        </div>
        <div className='flex items-center space-x-6'>
            <div className='flex items-center space-x-2'>
            <img src={imob} alt="" />
            <span>86.0/100</span>
            </div>
            <div className='flex items-center space-x-2'>
                <img src={fruit} alt="" />
                <span>97%</span>
            </div>

        </div>
        <p className='md:w-1/3'>
            John Wick is on the run after killing a member of the 
            international assassins guild, and with a $14 million price 
            tag on his head, he is the target of hit men and women everywhere.
        </p>
        <div>
            <button className='flex items-center space-x-2 bg-rose-700 px-4 py-2 rounded-[0.375rem] font-semibold' >
                <AiFillPlayCircle />
                <span>WATCH TRAILER</span>
            </button>
        </div>
      </div>
    </div>
  )
}

export default Hero
