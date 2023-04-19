import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
                        About
                    </p>
                </div>
                <div></div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-right text-4xl font-bold'>
                        <p>Hi, i'm Patrik, nice to meet you. Please take a look around.</p>
                    </div>
                    <div>
                        <p> I am a passionate gamer and front-end developer. I have always 
                            had an interest in drawing, design and IT and everything in its 
                            orbit. I love problem solving, aquiring new skills and creating 
                            things with color and meaning. I recently figured out that I 
                            needed a career change. </p>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default About