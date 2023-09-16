import './App.css';
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Featured from './components/Featured';
import Footer from './components/Footer';
import {BiSearchAlt} from "react-icons/bi";
import {LiaTimesSolid} from "react-icons/lia";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import loading from "./assets/loading.gif";

function App() {

  const [showSearch, setShowSearch] = React.useState(false)

  const handleShowSearch = () => {
    setShowSearch(true)
  }

  const [movieList, setMovieList] = React.useState(false)

  const getMovies = () => {
    fetch("https://api.themoviedb.org/3/discover/movie?api_key=f4c4f62e78dee0a5dccfd4be11e77ddf")
    .then(resp => resp.json())
    .then(data => setMovieList(data.results))
  }

  React.useEffect(() => {
    getMovies()
  }, [])

  

if(movieList) {
  return (
    <div className='relative'>
      <div className='relative'>

        <div className={`${showSearch ? "flex" : "hidden" } px-6 relative w-full h-[100vh] md:hidden bg-black items-center justify-center`}>
          <span onClick={() => setShowSearch(false)} className={`bg-rose-700 absolute top-4 right-4 text-white hover:bg-rose-400 duration-500 rounded-full h-fit p-2 font-bold cursor-pointer`}>
                <LiaTimesSolid />
            </span>
          <form className='flex items-center bg-white text-gray-800 px-4 py-2 rounded-md'>
        <input type="search" placeholder='What do you want to watch ?' 
            className='bg-transparent w-full h-full outline-none border-none'
            />
            <span className='cursor-pointer'>
            <BiSearchAlt className='' />
            </span>
            </form>
        </div>

    <Header handleShowSearch={handleShowSearch} />
      <Hero />
      <Featured movieList={movieList} />
      <Footer />
      </div>
    </div>
  )
} else {
  return (
    <div className='w-full h-full bg-white flex flex-col items-center justify-center'>
      <img src={loading} alt="" />
      <p className='text-gray-500'>Loading..</p>
      <p className='text-gray-800'>Trying to fetch data, pls wait!</p>
    </div>
  )
}
}

export default App
