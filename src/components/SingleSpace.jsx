import {React, useState, useEffect} from 'react'
import { CgProfile } from "react-icons/cg";
import { MdDateRange } from "react-icons/md";
import UpperNav from './UpperNav';
import CreateNotice from './CreateNotice.jsx'
import CreatePortal from './CreatePortal.jsx'
import {useParams} from 'react-router-dom'
import { space } from 'postcss/lib/list';
import NoticeCard from './NoticeCard';
import PortalCard from './PortalCard';
// import { FaChalkboardTeacher } from "react-icons/fa";


export default function SingleSpace(){
    const {spaceId} = useParams();
    // console.log(spaceId);


    const token = localStorage.getItem("auth_token");
  const [noticesObj, setnoticesObj] = useState([]);
  // const [trackSpaces, setTrackSpaces] = React.useState(props.spaceCount);

  async function noticeFetcher(auth_token){
      // const res = await fetch("https://homework-collab-production.up.railway.app/space/",{
        const res = await fetch(`http://127.0.0.1:8000/space/notice/${spaceId}/`,{
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Token "+ auth_token.toString()
          },
  
    })
    const data = await res.json();
    // console.log(data);
    setnoticesObj(data);
    // console.log(noticesObj)
    // setTrackSpaces(setspacesObj.length);
    // console.log(spacesObj.length)
  }

  const [portalObj, setportalObj] = useState([]);
  // const [trackSpaces, setTrackSpaces] = React.useState(props.spaceCount);

  async function portalFetcher(auth_token){
      // const res = await fetch("https://homework-collab-production.up.railway.app/space/",{
        const res = await fetch(`http://127.0.0.1:8000/space/portal/${spaceId}/create_portal/`,{
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Token "+ auth_token.toString()
          },
  
    })
    const data = await res.json();
    // console.log(data);
    setportalObj(data);
    console.log(portalObj)
    // setTrackSpaces(setspacesObj.length);
    // console.log(spacesObj.length)
  }

  useEffect(()=>{
    // getUser(token);
    noticeFetcher(token)
    portalFetcher(token)
},[])

function noticeRenderer(){
    return noticesObj.map((notice, index) => (
        <NoticeCard keyer={index} created_at={notice.created_at} title={notice.title} content={notice.content} created_by={notice.creator_name}/>
    ))}


function portalRenderer(){
    return portalObj.map((portal, index) => (
        <PortalCard keyer={index} created_at={portal.created_at} deadline={portal.deadline} name={portal.name} created_by={portal.created_by}/>
    ))}
    

    
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
        { true ?
            <CreateNotice spaceId={spaceId}/>
            :
            ''
        }
        
        <div className="noticeboard bg-[#004830] h-[50%] w-full border-[10px] border-solid border-white text-white p-3 shadow-lg overflow-y-auto">

            Notices:
            {/* <div className="notice relative h-fit w-full p-10 border-2 border-solid border-white my-2">
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
                
            </div> */}
            {!noticesObj.length == 0?
                noticeRenderer()
                :
                <div className='text-white text-[3rem]'>No Notices to show at the moment</div>
            }
            

        </div>
        <div className="portalwrapper h-[47%] bg-white w-full shadow-lg flex flex-col overflow-y-auto p-2">
            <div className='flex justify-between my-3'>
                <p>
                Active Portals:
                </p>
                        { true ?
                    <CreatePortal spaceId={spaceId}/>
                    :
                    ''
                }
            </div>
            <div className="portal w-full h-auto border-2 border-solid flex flex-col justify-between items-center gap-2 overflow-y-auto">
                
            
                {/* <div className="portalinfo h-full w-full flex justify-between gap-1 p-2 border-[1px] border-black">
                    <div className="info w-[70%] overflow-y-auto flex flex-col gap-2">
                    <div className="portalname font-bold bg-amber-300 w-full py-1 px-3">
                        Collaborative Development 
                        
                    </div>
                    <div className="portaldescription border-[1px] border-solid p-2 text-justify">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate minus sequi fugit dicta. Reprehenderit nulla eveniet molestiae consequuntur pariatur voluptatum illum hic voluptas facilis voluptatibus. Deleniti voluptas rerum delectus ex.

                    </div>
                    <div className="portalby font-bold">
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
                <button type="submit" className='bg-[#76FF7A] text-black font-bold text-[1.2rem] h-[2.5rem] w-[7rem] border-[1px] border-solid hover:border-2 hover:border-black'>Upload</button>
                </div>

                <div className="portalinfo h-full w-full flex justify-between gap-1 p-2">
                    <div className="info w-[70%] overflow-y-auto flex flex-col gap-2">
                    <div className="portalname font-bold bg-amber-300 w-full py-1 px-3">
                        Collaborative Development 
                        
                    </div>
                    <div className="portaldescription border-[1px] border-solid p-2 text-justify">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate minus sequi fugit dicta. Reprehenderit nulla eveniet molestiae consequuntur pariatur voluptatum illum hic voluptas facilis voluptatibus. Deleniti voluptas rerum delectus ex.

                    </div>
                    <div className="portalby font-bold">
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
                <button type="submit" className='bg-[#76FF7A] text-black font-bold text-[1.2rem] h-[2.5rem] w-[7rem] border-[1px] border-solid hover:border-2 hover:border-black'>Upload</button>
                </div> */}
                {!portalObj.length == 0?
                    portalRenderer()
                    :
                    <div className=''>
                        No Portal active portals in this space

                    </div>
            }
                
                
            </div>
        </div>

    </div>
    </div>
    </div>
    </section>
    </>
  )
}

