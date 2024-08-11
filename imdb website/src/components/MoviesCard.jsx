import React from "react";

function MoviesCard({
  poster_path,
  name,
  handleAddtoWatchList,
  movieObj,
  handleRemoveFromWatchlist,
  watchlist,
}) {
  function doesContain(movieObj) {
    for (let i = 0; i < watchlist.length; i++) {
      if (watchlist[i].id == movieObj.id) {
        return true;
      }
    }
    return false;
  }
  return (
    <div
    className="h-[40vh] w-[180px] bg-center bg-cover rounded-xl hover:scale-110 duration-300 hover:cursor-pointer flex flex-col  justify-between items-end"
    style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster_path})`,
      }}
    >
      {doesContain(movieObj) ? (
        <div
          onClick={() => handleRemoveFromWatchlist(movieObj)}
          className="m-4 flex justify-center h-[10] w-[20] bg-gray-900/60 items-center p-1 rounded-full"
        >
          &#10060;
        </div>
      ) : (
        <div
          onClick={() => handleAddtoWatchList(movieObj)}
          className="m-4 flex justify-center h-[10] w-[20] bg-gray-900/60 items-center p-1 rounded-full"
        >
          &#128150;
        </div>
      )}

      <div className="text-white text-xl w-full p-2 text-center bg-gray-900/70">
        {name}
      </div>
    </div>
  );
}

export default MoviesCard;
