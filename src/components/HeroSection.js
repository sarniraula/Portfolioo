import React from 'react';
import Typed from 'react-typed';
import Banner from '../img/banner1.png';
import { FaRegPaperPlane } from 'react-icons/fa';
import { AiOutlineArrowUp } from 'react-icons/ai';

const HeroSection = () => {
  return (
    <div className='container flex flex-col-reverse md:flex-row 
    items-center px-6 pb-10 mx-auto mt-12 space-y-0 md:space-y-0 border-b-2 border-slate-200'>
        {/* Left Item */}
        <div className='flex flex-col mt-8 space-y-5 md:w-1/2'>
            {/* Static Text Section */}
            <h1 className='max-w-md text-4xl font-sans font-bold text-center
            md:text-5xl md:text-left'>
                Hi, I'm <span className='text-primaryRed'>Saroj</span>
            </h1>

            {/* Dynamic Text Section */}
            <div className='wrapper inline-flex mx-auto text-2xl font-semibold md:text-3xl md:text-left md:mx-0'>
              <span className='static-text text-primaryRed'>a</span>
              <span className='dynamic-text ml-3'>
                <Typed
                  strings={["UX/UI Designer.", "developer.", "freelancer."]}
                  typeSpeed={40}
                  backSpeed={40}
                  loop={true}
                />
              </span>
            </div>
            <p className='max-w-sm text-center text-darkGrayishBlue md:text-left'>
                Manage makes it simple for software teams to plan day-to-day tasks
                while keeping the larger team goals in view.
            </p>

            {/* Button Items */}
            <div className='flex pt-8 space-x-8 mx-auto md:mx-0'>
                {/* <LinkRs to='contact' syp={true} smooth={true} offset={50} duration={500}> */}
                <a href='#' className='group md:block p-4 px-5 shadow-primary rounded baseline bg-gradient-to-r from-slate-200 to-slate-50 hover:from-primaryRed hover:to-primaryRed'>
                    <p className=' text-primaryRed flex text-sm font-medium font-serif group-hover:text-white'>Let's Talk<FaRegPaperPlane style={{marginLeft:"10px"}}/></p>
                </a>
                {/* </LinkRs> */}

                {/* <LinkRs to='portfolio' syp={true} smooth={true} offset={50} duration={500}> */}
                <a href='#' className='group md:block p-4 px-5 shadow-primary rounded baseline bg-gradient-to-r from-slate-200 to-slate-50 hover:from-primaryRed hover:to-primaryRed'>
                    <p className=' text-primaryRed flex text-sm font-medium font-serif group-hover:text-white'>Portfolio<AiOutlineArrowUp style={{marginLeft:"10px"}}/></p>
                </a>
                {/* </LinkRs> */}
            </div>
        </div>



        {/* Image (Right Item) */}
          <div className='md:w-1/3 bg-gradient-to-r pt-10 from-slate-200 to-slate-50 rounded-2xl shadow-primary mx-auto hover:scale-105 transition duration-300 ease-in-out hover:shadow-lg'>
            <img src={Banner}/>
          </div>
     
    </div>
  )
}

export default HeroSection