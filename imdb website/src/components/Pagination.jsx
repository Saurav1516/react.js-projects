import React from 'react'

function Pagination({handlePrev, handleNext, pageNum}) {
  return (
    <div className='bg-gray-400 p-4 mt-8 flex justify-center'>
        <div onClick={handlePrev} className='px-8 cursor-pointer'><i class="fa-solid fa-arrow-left"></i></div>
        <div className='font-bold'>{pageNum}</div>
        <div onClick={handleNext} className='px-8 cursor-pointer'><i class="fa-solid fa-arrow-right"></i></div>
    </div>
  )
}

export default Pagination