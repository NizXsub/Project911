import React from 'react'
import Button from '../Button/Button'
import heroimg from '../../assets/hero.png'
import {Link as Exlink} from 'react-router-dom';

const Hero = () => {
    return (
        <div className='container mx-auto flex flex-col lg:flex-row items-start justify-center gap-8 py-28 px-4 md:px-0'>
            <div className='flex items-start justify-start bg-[#1F1F39] mt-8 rounded-xl'>
                <span className='w-[94px] h-1' > </span>
            </div>
            <div>
                <h2 className='text-5xl md:text-7xl font-extrabold mb-12'>Where <br /> Collab meets <br /> Technology!</h2>
                <p className='mb-16'>Create dedicated online spaces, build mcqs, and ace classes together. Track deadlines, discuss concepts, and conquer assignments as a team.</p>
                <Exlink to='/signup'>
                <Button
                    className="uppercase font-source-sans bg-[#1F1F39] text-white px-12 py-3 rounded-[7px] text-2xl"
                    title="Get Started" 
                    link='dashboard/spaces'/>
                </Exlink>
            </div>
            <div className='w-full flex justify-center'>
                <img src={heroimg} className='w-full md:w-[770px] md:h-[500px] object-contain' alt="" />
            </div>
        </div>
    )
}

export default Hero