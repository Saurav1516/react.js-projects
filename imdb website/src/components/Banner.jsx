import React from 'react'

function Banner() {
  return (
    <div className='h-[20vh] md:h-[99vh] bg-cover flex items-end' style={{backgroundImage: `url(https://wallpapers.com/images/featured/avengers-vm16xv4a69smdauy.jpg)`}}>
       <div className='text-white text-2xl text-center w-full bg-gray-900/70 p-3'>Avengers Endgame</div>
    </div>
  )
}

export default Banner