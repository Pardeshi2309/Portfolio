import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-auto bg-gradient-to-b from-gray-800 to-black text-white'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8 hover:scale-105 duration-200 w-[15%]'> <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
        </div>
        <p className='text-xl mt-20'>
          Hii I am Pardeshi Jaiswar, Currently I am Pursuing Bachelor of Engineering in Computer Engineering.
        </p>
        <br />
        <p className='text-xl'>I love to work with the technologies like Html,css,Javascript,React,Tailwind css. </p>
      </div>
    </div>
  )
}

export default About