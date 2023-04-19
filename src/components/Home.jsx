import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>

        {/* Container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-pink-600'>Hi, my name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Patrik Mattsson</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a frontend developer.</h2>
            <p className='text-[#8892b0] py-4 max-w-[700px]'>I am a passionate gamer and front-end developer. I have always had an 
                interest in drawing, design and IT and everything in its orbit. 
                I love problem solving, aquiring new skills and creating things with color and meaning. 
                I recently figured out that I needed a career change. And I felt like front-end developer 
                would be a great way to combine these. I wish to be part of the creation process of projects. 
                Therefore I decided to make the switch to developer. I look forward to this new path 
                I have taken and any future projects I get to contribute to.</p>
            <div>
                <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
                    View Work 
                <span className='group-hover:rotate-90 duration-300'>
                    <HiArrowNarrowRight className='ml-3 '/>
                </span>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Home