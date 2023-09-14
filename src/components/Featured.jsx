import React from 'react';
import MovieCard from './MovieCard';

const Featured = (props) => {
  return (
    <div className='px-6 py-4'>
      <h1 className='text-3xl font-bold md:text-4xl'>Featured Movies</h1>
      <div className='flex flex-wrap w-full justify-between px-6 flex-1 space-x-2'>
      {
                props.movieList.map((movie) => {
                  return (
                  // <img key={movie.id} style={{width: "300px", height: "200px", marginTop: "4rem", marginRight: "1rem", objectFit: "cover"}} src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="" />
                    <MovieCard 
                    key={movie.id}
                    img={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    date={movie.release_date}
                    title={movie.title}
                    num= {movie.vote_average}
                    genre={"Adventurous"}
                    />
                  )
                })
      }
      </div>
    </div>
  )
}

export default Featured
