import {React, useState} from 'react'
import { CgProfile } from "react-icons/cg";
import { MdDateRange } from "react-icons/md";
import UpperNav from './UpperNav';
// import { FaChalkboardTeacher } from "react-icons/fa";


const SingleSpace = () => {
    const [file, setFile] = useState()

    function handleChange(event) {
      setFile(event.target.files[0])
    }

  return (
    <>
    <UpperNav/>
    <section className='w-screen h-screen flex justify-center bg-[#f6eff3]'>
        
    {/* <div className="flex w-full max-w-sm items-center space-x-2">
      <Input type="email" placeholder="Email" />
      <Button type="submit">Subscribe</Button>
  </div> */}
    <div className='w-[100%] h-[95%] relative flex flex-col items-center'>
    <h1 className='text-[4rem] w-[70%] border-b-[1px] border-solid border-[black] mb-10'>Herald College Space</h1>
    <div className="flex h-full w-full gap-5 px-5 ">
    <div className="members w-[13%] px-2 shadow-lg bg-white before h-full overflow-y-auto flex flex-col gap-1">
        <h1 className='text-[1.5rem]'>
            Members:
        </h1>
        <div className="eachmember h-[2rem] w-full px-1 bg-[#D9E5D6] border-[1px] flex items-center justify-between">
        <div className="profile h-[1.5rem] w-[1.5rem] bg-white flex items-center justify-center rounded-full">
            <CgProfile className='scale-[1.5]'/>
            </div>
            <div className="name px-2 w-[6rem] bg-[#0FA3B1] text-center text-white overflow-hidden">
                Someone
            </div>
            <div className="role bg-[#F7A072] px-2 w-[4rem] text-center text-white overflow-hidden">
                Admin
            </div>
        </div>
    </div>
    <div className="allcontent bg-white h-[full] w-[72%] overflow-y-auto border-2 border-solid flex flex-col justify-between p-2">
        <div className="noticeboard bg-[#004830] h-[50%] w-full border-[10px] border-solid border-white text-white p-3 shadow-lg overflow-y-auto">
            Notices:
            <div className="notice relative h-fit w-full p-10 border-2 border-solid border-white my-2">
                <div className="noticedate absolute top-2 left-2 flex gap-2 items-center">
                    <MdDateRange className='scale-[1.5]'/>
                    <div className="date font-bold text-[14px]">
                        2023-04-01
                    </div>
                </div>
                <p className='text-justify'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga necessitatibus minima, corporis aut porro illo dolorum ad minus distinctio, quaerat quis enim aliquam quos, adipisci voluptatibus vero. Sapiente, nesciunt vero!
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis modi maxime alias sunt incidunt eligendi libero error molestiae exercitationem sit, mollitia cum consequuntur doloremque. Commodi sint soluta
                </p>
                <div className="noticeby mt-3 font-extrabold">
                    - Teacher
                </div>
                
            </div>
        </div>
        <div className="portalwrapper h-[47%] bg-white w-full shadow-lg flex flex-col overflow-y-auto p-2">
            Active Portals:
            <div className="portal w-full h-auto border-2 border-solid flex flex-col justify-between items-center gap-2">
                <div className="portalinfo h-full w-full flex justify-between gap-1 p-2">
                    <div className="info w-[70%] overflow-y-auto flex flex-col gap-2">
                    <div className="portalname font-bold bg-amber-300 w-full py-1 px-3">
                        Collaborative Development 
                        
                    </div>
                    <div className="portaldescription border-[1px] border-solid p-2 text-justify">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate minus sequi fugit dicta. Reprehenderit nulla eveniet molestiae consequuntur pariatur voluptatum illum hic voluptas facilis voluptatibus. Deleniti voluptas rerum delectus ex.

                    </div>
                    <div className="portalby font-bold">
                    {/* <FaChalkboardTeacher className='scale-[1.5]'/> */}
                        - Teacher's Name
                    </div>
                    </div>
                    <div className="dates p-1 flex flex-col gap-1">
                    <div className="startdaten bg-blue-300 px-1">
                        Started: 2024-02-01 2:00
                    </div>
                    <div className="enddate bg-red-400 px-1">
                        Deadline: 2024-02-10 15:00
                    </div>
                    </div>
                </div>
                <div className='bg-slate-100 w-full flex justify-between items-center p-3'>
                <input type="file" onChange={handleChange}/>
                <button type="submit" className='bg-[#76FF7A] text-black font-bold text-[1.2rem] h-[2.5rem] w-[7rem] border-[1px] border-solid'>Upload</button>
                </div>
            </div>
        </div>

    </div>
    </div>
    </div>
    </section>
    </>
  )
}

export default SingleSpace