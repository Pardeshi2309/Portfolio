import React from 'react'
import memegenerator from '../assests/memegenerator.jpg'
import tempconverter from '../assests/tempconverter.jpg'
const Portfolio = () => {

    const portfolios = [
        {
            id: 1,
            src: memegenerator,
            demo:"https://meme-generatorjp.netlify.app/",
            github:"https://github.com/Pardeshi2309/Meme-Generator"
        },

        {
            id: 2,
            src: tempconverter,
            demo:"https://github.com/Pardeshi2309/OIB-SIP/tree/main/Temperature%20converter",
            github:"https://github.com/Pardeshi2309/OIB-SIP/tree/main/Temperature%20converter"
        },

       
    ]

    return (

        <div name="portfolio" className='bg-gradient-to-b from-black to-gray-800 text-white md:h-screen h-auto'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
                    <p className='py-6'>Check out my Project here</p>


                </div>
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>


                    {
                        portfolios.map((project,index) => (< div key={index} className='shadow-lg mx-auto shadow-gray-600 rounded-lg'>
                            <img src={project.src} alt="" className='rounded-md duration-200 hover:scale-105' />
                            <div className='flex items-center justify-center'>
                                <a href={project.github} target="_blank" rel="noopener noreferrer">
                                    <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</button>
                                </a>
                                <a href={project.demo} target="_blank" rel="noopener noreferrer">
                                    <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Demo</button>
                                </a>
                            </div>
                        </div>


                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Portfolio