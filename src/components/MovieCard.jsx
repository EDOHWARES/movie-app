import React from 'react';
import imob from "../assets/imob.png";
import fruit from "../assets/fruit.png";

const MovieCard = (props) => {
  return (
    <div className='w-[300px] cursor-pointer'>

      <div>
        <img src={props.img} alt="" 
        style={{width: "300px", height: "200px", marginTop: "4rem", objectFit: "cover"}}
        />
      </div>

      <div className='mt-2 space-y-2'>
        <p className='text-gray-400 text-[12px] leading-[15.6px]'>{props.date}</p>
        <p className='text-[18px] font-bold text-gray-900'>{props.title}</p>
        <p className='flex justify-between items-center'>
          <span className='flex items-center space-x-4'><div><img src={imob} alt="" className='h-auto' /></div><div>{props.num}/100</div></span>
          <span className='text-[12px] text-gray-900 flex items-center space-x-2'><div className=''><img src={fruit} className='w-fit' alt="" /></div> <span>97%</span></span>
        </p>
        <p className='text-gray-400 leading-[15.6px]'>{props.genre}</p>
      </div>

    </div>
  )
}

export default MovieCard
