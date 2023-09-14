import './App.css';
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Featured from './components/Featured';
import Footer from './components/Footer';
import {BiSearchAlt} from "react-icons/bi";
import {LiaTimesSolid} from "react-icons/lia";


function App() {

  const [showSearch, setShowSearch] = React.useState(false)

  const handleShowSearch = () => {
    setShowSearch(true)
  }

  const [movieList, setMovieList] = React.useState([])

  const getMovies = () => {
    fetch("https://api.themoviedb.org/3/discover/movie?api_key=f4c4f62e78dee0a5dccfd4be11e77ddf")
    .then(resp => resp.json())
    .then(data => setMovieList(data.results))
  }

  React.useEffect(() => {
    getMovies()
  }, [])


  return (
    <div className='relative'>
      <div className='relative'>

        <div className={`${showSearch ? "flex" : "hidden"} relative w-full md:hidden h-[100vh] bg-black items-center justify-center px-10`}>
          <div onClick={() => setShowSearch(false)} className='text-white absolute top-4 right-4 bg-rose-700 p-2 rounded-full cursor-pointer hover:bg-rose-400 duration-500'>
            <LiaTimesSolid />
          </div>
          <div className='flex items-center bg-white text-black px-4 py-2 rounded-sm'>
        <input type="search" placeholder='What do you want to watch ?' 
            className='bg-transparent w-full h-full outline-none border-none'
            />
            <span className='cursor-pointer'>
            <BiSearchAlt className='' />
            </span>
            </div>
        </div>

    <Header handleShowSearch={handleShowSearch} />
      <Hero />
      <Featured movieList={movieList} />
      <Footer />
      </div>
    </div>
  )
}

export default App
