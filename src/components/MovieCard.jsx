import React from 'react';
import imob from "../assets/imob.png";
import fruit from "../assets/fruit.png";
import {Link} from "react-router-dom";
import {AiFillHeart} from "react-icons/ai";
import {AiOutlineHeart} from "react-icons/ai";
import Genres from './Genres';

const MovieCard = (props) => {

  const randomGenre = () => {
    return Genres[Math.floor(Math.random() * Genres.length)].genre;
  }

  const [love, setLove] = React.useState(false);

  return (
    <div data-testid="movie-card" className='w-[300px] cursor-pointer shadow-md p-2 hover:scale-105 duration-500'>

      <div>
        <img data-testid="movie-poster" src={props.img} alt="" 
        style={{width: "300px", height: "200px", marginTop: "4rem", objectFit: "cover"}}
        />
      </div>

      <div className={`mt-2 space-y-2 ${love ? "bg-blue-200" : "bg-transparent"}`}>
        <p data-testid="movie-release-date" className='text-gray-400 text-[12px] leading-[15.6px]'>{props.date}</p>
        <p data-testid="movie-title" className='text-[18px] font-bold text-gray-900'>{props.title}</p>
        <p className='flex justify-between items-center'>
          <span className='flex items-center space-x-4'><span><img src={imob} alt="" className='h-auto' /></span><div>{props.num}/100</div></span>
          <span className='text-[12px] text-gray-900 flex items-center space-x-2'><span className=''><img src={fruit} className='w-fit' alt="" /></span> <span>{Math.floor(Math.random() * 100)}%</span></span>
        </p>
        <div className='flex items-center justify-between'>
        <p className='text-gray-400 leading-[15.6px]'>{randomGenre()}</p>
        {!love ? <AiOutlineHeart className={`cursor-pointer`} onClick={() => setLove(!love)} /> : <AiFillHeart className='cursor-pointer fill-red-600' onClick={() => setLove(!love)} />}
        </div>
      </div>

    </div>
  )
}

export default MovieCard
