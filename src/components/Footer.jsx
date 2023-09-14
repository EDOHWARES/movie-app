import React from 'react';
import {GrFacebook} from "react-icons/gr";
import {BsInstagram} from "react-icons/bs";
import {BsTwitter} from "react-icons/bs";
import {AiFillYoutube} from "react-icons/ai";

const Footer = () => {
  return (
    <footer className='flex items-center justify-center w-full px-6 py-4 h-[50vh]'>
      <div className='flex flex-col space-y-6 items-center'>
        <div className='flex items-center space-x-8'>
            <GrFacebook />
            <BsInstagram />
            <BsTwitter />
            <AiFillYoutube />
        </div>
        <ul className='flex items-center space-x-4 text-gray-900 text-xs md:text-[18px] font-semibold text-center'>
            <li><a href="#">Conditions of Use</a></li>
            <li><a href="#">Privacy & Policy</a></li>
            <li><a href="#">Press Room</a></li>
        </ul>
        <p className='text-gray-500 text-[15px] font-semibold text-center'>
            &copy; 2021MovieBox by Adriana Eka Prayudha
        </p>
      </div>
    </footer>
  )
}

export default Footer
