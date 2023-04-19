import React from 'react'
import giversGame from '../assets/giversGame.png'
import GuessWho from '../assets/GuessWho.png'
import Quiz from '../assets/Quiz.png'
import SignIn from '../assets/SignIn.png'
import Todo from '../assets/Todo.png'

const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-b-pink-600'>Work</p>
                <p className='py-6'>// Check out some of my recent work.</p>
            </div>
        {/* Container */}
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

                {/* Grid Item */}
                <div 
                style={{backgroundImage: `url(${GuessWho})`}} 
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                        JavaScript Application
                        </span>
                        <div className='pt-8 text-center'>
                            <a href='https://laughing-noether-a2e4af.netlify.app/'>
                                <button className='text-center round-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href='https://github.com/Mattsson717/project-guess-who'>
                                <button className='text-center round-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                <div 
                style={{backgroundImage: `url(${Quiz})`}} 
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                        React Redux Application
                        </span>
                        <div className='pt-8 text-center'>
                            <a href='https://the-even-better-foxes.netlify.app'>
                                <button className='text-center round-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href='https://github.com/Mattsson717/project-redux-quiz'>
                                <button className='text-center round-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                <div 
                style={{backgroundImage: `url(${Todo})`}} 
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                        React Js Application
                        </span>
                        <div className='pt-8 text-center'>
                            <a href='https://pixels-todo-app.netlify.app'>
                                <button className='text-center round-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href='https://github.com/Mattsson717/project-todos'>
                                <button className='text-center round-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Work