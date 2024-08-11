import React, { useEffect } from 'react'
import MoviesCard from './MoviesCard'
import axios from 'axios'
import {useState} from 'react'
import Pagination from './Pagination'

function Movies({handleAddtoWatchList, handleRemoveFromWatchlist, watchlist}) {

  const [movies, setMovies] = useState([])
  const [pageNum, setpageNum] = useState(1)

  const handlePrev = () => {
    if(pageNum===1) {
      setpageNum(pageNum)
    }
    else {
      setpageNum(pageNum-1)
    }
  }

  const handleNext = () => {
    setpageNum(pageNum+1)
  }


  useEffect(() =>{
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=5568ffb2de4889dc47de61869b07ca86&language=en-US&page=${pageNum}`).then(function(res){
      console.log(res.data.results)
      setMovies(res.data.results);
    })
  }, [pageNum])
  return (

   <div className='p-5'>
    <div className='text-2xl font-bold text-center m-5'>
        Trending Movies
    </div>
    <div className='flex flex-row flex-wrap justify-around gap-7'>
        
        {movies.map((movieObj) => {
          return <MoviesCard poster_path={movieObj.poster_path} name={movieObj.original_title} key={movieObj.id} movieObj={movieObj} handleAddtoWatchList={handleAddtoWatchList} handleRemoveFromWatchlist={handleRemoveFromWatchlist} watchlist={watchlist}
          />
          
        })}   
    </div>

    <Pagination pageNum={pageNum} handlePrev={handlePrev} handleNext={handleNext} />
   </div>
  )
}

export default Movies






















