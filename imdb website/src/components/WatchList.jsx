import React, { useEffect, useState } from "react";
import genreids from '../Utility/Genre'

function WatchList({ watchlist , setWatchList, handleRemoveFromWatchlist}) {
  const [search, setSearch] = useState("");
  const [genreList, setGenreList] = useState(['All Genres'])
  const [currGenre, setCurrGenre] = useState('All Genres')

  let handleSearch = (e) => {
    setSearch(e.target.value);
  };

  let handleFilter = (genre) => {
    setCurrGenre(genre)
  }

  let sortIncreasing = ()=>{
    let sortedIncreasing = watchlist.sort((movieA, movieB) => {
      return movieA.vote_average - movieB.vote_average
    })
    setWatchList([...sortedIncreasing])
  }
  
  let sortDecreasing = ()=>{
    let sortedDecreasing = watchlist.sort((movieA, movieB) => {
      return movieB.vote_average - movieA.vote_average
    })
    setWatchList([...sortedDecreasing])
  }

  useEffect(()=> {
    let temp = watchlist.map((movieObj) => {
      return genreids[movieObj.genre_ids[0]]
    })
    temp = new Set(temp)
    setGenreList(['All Genres', ...temp])
    console.log(temp);
  }, [watchlist])

  return (
    <>
      <div className="flex justify-center flex-wrap m-8">
        {genreList.map((genre) => {
          return  <div onClick={()=> {handleFilter(genre)}} className= { currGenre ==genre?"flex justify-center rounded-xl text-white font-bold mx-5 items-center cursor-pointer bg-violet-500 hover:bg-violet-900 h-[3rem] w-[9rem]" : "flex justify-center rounded-xl text-white font-bold mx-5 items-center cursor-pointer bg-green-600 hover:bg-violet-900 h-[3rem] w-[9rem]"}>
            {genre}
          </div>
        })}
      </div>

      <div className="flex justify-center my-4">
        <input
          onChange={handleSearch}
          value={search}
          className="bg-gray-300 h-[3rem] w-[18rem] px-4 rounded-md"
          type="text"
          placeholder="Search for movies..."
        />
      </div>

      <div className="overflow-hidden rounded-md border border-gray-300 m-8">
        <table className="w-full text-black-500 text-center ">
          <thead className="border-b-2">
            <tr>
              <th>Name</th>
              <th className="flex justify-center">
                <div onClick={sortIncreasing} className="p-2"><i class="fa-solid fa-arrow-up"></i></div>
                <div className="p-2">Rating</div>
                <div onClick={sortDecreasing} className="p-2"><i class="fa-solid fa-arrow-down"></i></div>
              </th>
              

              <th>Popularity</th>
              <th>Genre</th>
            </tr>
          </thead>
          <tbody>
            {watchlist.filter((movieObj) => {
              if(currGenre == 'All Genres') {
                return true
              }else{
                return genreids[movieObj.genre_ids[0]] == currGenre; 
              }
            }).filter((movieObj) => {
                return movieObj.title
                  .toLowerCase()
                  .includes(search.toLocaleLowerCase());
              })
              .map((movieObj) => {
                return (
                  <tr className="border-b-2">
                    <td className="flex items-center px-3 my-2">
                      <img
                        className="h-[7rem] w-[6rem]"
                        src={`https://image.tmdb.org/t/p/original/${movieObj.poster_path}`}
                      />
                      <div className="mx-10">{movieObj.title}</div>
                    </td>

                    <td>{movieObj.vote_average}</td>
                    <td>{movieObj.popularity}</td>
                    <td>{genreids[movieObj.genre_ids[0]]}</td>

                    <td onClick={()=> handleRemoveFromWatchlist(movieObj)} className="cursor-pointer text-red-600">Delete</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default WatchList;
