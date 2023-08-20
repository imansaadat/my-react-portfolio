import React from 'react'
import {banner} from '../../assets'
const ImageIntro = () => {
  return (
    <div className='w-full relative flex items-center justify-center'>
        <img className='w-[300px] h-[400px] md:w-[500px] md:h-[680px] z-10' src={banner} alt='Iman Saadat' />
        <div className='absolute bottom-0 w-[350px] h-[300px] md:w-[500px] md:h-[500px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne'></div>
    </div>
  )
}

export default ImageIntro