import React from 'react'
import Qcard from './Qcard.jsx'

export default function MCQ() {
  return (
    <section className='h-[100vh] w-full flex flex-col gap-5 justify-center items-center'>
        <div className='w-[70%] flex justify-between'>
          <div className='Title'>
          MCQ Title
          </div>
          <div className="time">
            Time: <span className='font-bold'>1 hr</span>
          </div>
          </div>
        <form className="paper p-5 w-[70%] h-[90%] flex flex-col overflow-y-auto">
          <div className="questions flex flex-col gap-5 snap-y">
            <div className='snap-center'>
              <Qcard />
            </div>
            <div className='snap-center'>
              <Qcard />
            </div>
            <div className='snap-center'>
              <Qcard />
            </div>
            <div className='snap-center'>
              <Qcard />
            </div>
            <div className='snap-center'>
              <Qcard />
            </div>
        
        </div>
        <button className='mt-5 border-black bg-[#76FF7A] text-black font-bold text-[1.2rem] h-[2.5rem] w-[7rem] border-[1px] border-solid hover:border-2 hover:border-black'>Submit</button>
        {/* <button type="submit" className=' '>Upload</button> */}
        </form>
    </section>
  )
}