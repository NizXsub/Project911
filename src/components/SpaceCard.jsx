import React from 'react'
import { HiMiniUserGroup } from "react-icons/hi2";
import { BiTask } from "react-icons/bi";
import './SpaceCard.css';

const SpaceCard = () => {
  return (
    <div className="wrapper h-[40%] w-[18rem] flex flex-col bg-white">
        <div className='h-[40%] w-[100%] relative'>
            <div className='h-full w-full overflow-hidden flex justify-center items-center'>
                <img className ="w-full h-full bg-black" src="" alt="Group Background" />
            </div>
            <div className='absolute bg-white h-[2.5rem] w-[2.5rem] bottom-[-10%] right-[15%] border-4 border-solid border-white rounded-full'>
                {/* <img src={HiMiniUserGroup} alt="Members" /> */}
                <HiMiniUserGroup className='h-full w-full'/>
                <div className="count absolute flex h-5 w-5 bg-green-500 justify-center items-center rounded-full text-white top-[-20%] right-[-20%]">8</div>
            </div>
        </div>
        <div className="info h-[60%] p-5 flex flex-col gap-5">
            <div className="SpaceName text-2xl w-full">
                Herald College Space
            </div>
            <div className="notices w-full h-[60%] border-[1px]">

            </div>
            <div className="OpenPortals flex justify-start">
                <div className='h-[2rem] w-[2rem] relative'>
                    {/* <img src={HiMiniUserGroup} alt="Members" /> */}
                    <BiTask className='h-full w-full'/>
                    <div className="flex h-5 w-5 bg-red-500 justify-center items-center rounded-full text-white absolute top-[-20%] right-[-20%]">8</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SpaceCard