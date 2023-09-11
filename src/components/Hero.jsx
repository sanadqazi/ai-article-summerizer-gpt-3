import React from 'react'
import { logo } from '../assets';

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
        <nav className='flex justify-between items-center w-full mb-10 pt-3'>
            <img src={logo} alt='subz_logo' className='w-28 object-contain' />
            <button type='button' onClick={()=>window.open('https://github.com/sanadqazi')}
            className='black_btn'> 
                Github
            </button>
        </nav>

        <h1 className='head_text'>
            Summerize Articles with <br className='max-md:hidden' />
            <span className='orange_gradient'>OpenAI GPT-3</span>
        </h1>
        <h2 className='desc'>
        Simply your reading with Summize, an open-source article summerizer that transforms lengthy articles into clear and concide summeries <br />
        Developed by Sanad Qazi
        </h2>
    </header>
  )
}

export default Hero