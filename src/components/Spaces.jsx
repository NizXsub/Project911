import React from 'react';
import SpaceCard from './SpaceCard';
import { Link as Exlink } from 'react-router-dom';
import UpperNav from './UpperNav';
import CreateSpace from './CreateSpace.jsx'
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"


export default function Spaces() {
  return (
    <>
    <UpperNav/>
    <section className='w-screen h-screen flex justify-center bg-[#f6eff3]'>
      
    {/* <div className="flex w-full max-w-sm items-center space-x-2">
      <Input type="email" placeholder="Email" />
      <Button type="submit">Subscribe</Button>
    </div> */}
    <div className='w-[70%]'>
    <h1 className='text-[4rem] border-b-[1px] border-solid border-[black] mb-10'>My Spaces</h1>
    { !true ?
      <Exlink to='/dashboard/singlespace'>
        <SpaceCard/>
      </Exlink>
    :
      <div className='h-[75%] border-2 flex flex-col justify-center items-center gap-5 bg-white'>
      <p>
        You don't have joined any spaces..
      </p>
      <CreateSpace/>
      </div>
    }
    
    </div>
    </section>
    </>
  )
}