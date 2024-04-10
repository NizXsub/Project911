import React from 'react'
import { HiMiniUserGroup } from "react-icons/hi2";
import { BiTask } from "react-icons/bi";
import './SpaceCard.css';
import { MdContentCopy } from "react-icons/md";

const SpaceCard = (props) => {
    const spaceIdRef = React.useRef(null);
    const copyContent = () =>{
        // const spaceIdContent = spaceIdRef.current.innerText;
        navigator.clipboard.writeText(props.spaceId);
        alert("SpaceId Copied!");
    }

  return (
    <div className="wrapper h-[23rem] w-[18rem] flex flex-col bg-white border-2">
        <div className='h-[40%] w-[100%] relative'>
            <div ref={spaceIdRef} className="spaceid absolute text-white left-2 top-1 text-[13px]">
                {`Id: ${props.spaceId}`}
            </div>
            <div className="absolute right-2 top-2">
            <MdContentCopy className='copy text-white' onClick={copyContent}/>
            </div>
            <div className='h-full w-full overflow-hidden flex justify-center items-center'>
                <img className ="w-full h-full bg-black" src="" alt="Group Background" />
            </div>
            <div className='absolute bg-white h-[2.5rem] w-[2.5rem] bottom-[-10%] right-[15%] border-4 border-solid border-white rounded-full'>
                {/* <img src={HiMiniUserGroup} alt="Members" /> */}
                <HiMiniUserGroup className='h-full w-full'/>
                <div className="count absolute flex h-5 w-5 bg-green-500 justify-center items-center rounded-full text-white top-[-20%] right-[-20%]">
                    8
                </div>
            </div>
        </div>
        <div className="info h-[60%] p-5 flex flex-col gap-5">
            <div className="SpaceName text-2xl w-full">
                {props.name}
            </div>
            <div className="notices w-full h-[60%] border-[1px]">

            </div>
            { !props.explore ?

                <div className="OpenPortals flex justify-start">
                <div className='h-[2rem] w-[2rem] relative'>
                    {/* <img src={HiMiniUserGroup} alt="Members" /> */}
                    <BiTask className='h-full w-full'/>
                    <div className="flex h-5 w-5 bg-red-500 justify-center items-center rounded-full text-white absolute top-[-20%] right-[-20%]">8</div>
                </div>
                </div>
                :
                <div>
                    <button type="submit" className='bg-[#76FF7A] text-black font-bold text-[1.2rem] h-[2.5rem] w-[7rem] border-[1px] border-solid hover:border-2 hover:border-black'>Join</button>
                </div>

            }
            
        </div>
    </div>
  )
}

export default SpaceCard