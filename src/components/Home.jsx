import React from 'react'
import MyImages from '../assests/myimage.png'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
const Home = () => {
  return (
    <div name="home" className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
        <div className='flex flex-col justify-center h-full'>
          <h2 className='text-4xl sm:text-6xl font-bold text-white'>
            I'm a FrontEnd Developer
          </h2>
          <p className='text-gray-400 py-4 max-w-md'>I am a Frontend developer
            I love to work in web development using technologies like Html, CSS, JavaScript, React, Tailwind, Next JS. </p>
          <div>
            <button className='group text-white w-fit px-5 py-2 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to to-blue-500'>
              Portfolio
              <span className='group-hover:rotate-90 duration-300'>
                < MdOutlineKeyboardArrowRight size={22} />
              </span>
            </button>
          </div>
        </div>
        <div>
          <img src={MyImages} alt='profile' className='mx-auto w-2/3 md:w-full ' />
        </div>
      </div>
    </div>
  )
}

export default Home