import {React, useState, useEffect, useLayoutEffect} from 'react'
import {Link as Exlink} from 'react-router-dom';
import { CgProfile } from "react-icons/cg";
// import { MdDateRange } from "react-icons/md";
import UpperNav from './UpperNav';
import CreateNotice from './CreateNotice.jsx'
import CreatePortal from './CreatePortal.jsx'
import {useParams} from 'react-router-dom'
// import { space } from 'postcss/lib/list';
import NoticeCard from './NoticeCard';
import PortalCard from './PortalCard';
import { IoCalendar } from "react-icons/io5";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { SlPlus } from "react-icons/sl";
import AddMembers from "./AddMembers"
import {api} from './variables.js';
import { RxCrossCircled } from "react-icons/rx";
import CreateCollection from './CreateCollection';
import CreateMCQ from './CreateMCQ';
// import Snackbar from './Snackbar.jsx';
// import { FaChalkboardTeacher } from "react-icons/fa";


export default function SingleSpace(){

    const [iamTeacher, setiamTeacher] = useState(false);
    const [user, setUser] = useState();
    async function getUser(auth_token){
        // const res = await fetch("https://homework-collab-production.up.railway.app/auth/users/me/",{
            const res = await fetch(`${api}/auth/users/me/`,{
            method: "GET",
            
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Token "+ auth_token.toString()
                  },
            
        })
        const data = await res.json();
        // console.log(data.username);
        setUser(data.username)
        // console.log(user)
    }

    const [startDate, setStartDate] = useState(new Date());

    const {spaceId} = useParams();
    const {name} = useParams()
    // console.log(spaceId);


    const token = localStorage.getItem("auth_token");
  const [noticesObj, setnoticesObj] = useState([]);
  // const [trackSpaces, setTrackSpaces] = React.useState(props.spaceCount);

  async function noticeFetcher(auth_token){
      // const res = await fetch("https://homework-collab-production.up.railway.app/space/",{
        const res = await fetch(`${api}/space/${spaceId}/notice/`,{
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
        const res = await fetch(`${api}/space/portal/${spaceId}/create_portal/`,{
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Token "+ auth_token.toString()
          },
  
    })
    const data = await res.json();
    // console.log(data);
    setportalObj(data);
    // console.log(portalObj)
    // setTrackSpaces(setspacesObj.length);
    // console.log(spacesObj.length)
  }

//   useLayoutEffect(()=>{
//     // getUser(token);
//     noticeFetcher(token)
//     portalFetcher(token)
//     memFetcher(token)
//     getUser(token);
//     // const usrn = user;
//     // console.log(user);
    
//     console.log(iamTeacher);
//     // console.log(user);
//     // console.log("this ran");
//     // {if(iamTeacher){
//     //     reqMemFetcher(token);
//     //     console.log("this ran");
//     // }
//     // }
// },[token])
// useLayoutEffect(()=>{
//     amiTeacher(user, memList);
// },[user, memList])


function noticeRenderer(){
    return noticesObj.map((notice, index) => (
        <NoticeCard keyer={index} created_at={notice.created_at} title={notice.title} content={notice.content} created_by={notice.creator_name}/>
    ))}


function portalRenderer(){
    return portalObj.map((portal, index) => (
        <PortalCard keyer={index} created_at={portal.created_at} deadline={portal.deadline} name={portal.name} created_by={portal.created_by} iamTeacher={iamTeacher} spaceId={spaceId} portalId={portal.portalId} des={portal.description}/>
    ))}
    

    
    const [file, setFile] = useState()

    function handleChange(event) {
      setFile(event.target.files[0])
    }


    // `${api}/space/${spaceId}/members/`
    const [memList, setMemList] = useState([]);

    async function memFetcher(auth_token){
        const res = await fetch(`${api}/space/${spaceId}/members/`,{
            method: "GET",
            
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Token "+ auth_token.toString()
                  }
            // body: {

            // }
        });

        const data = await res.json()
        
        if(!res.ok){
          alert(data)

        }else{
        setMemList(data);
          console.log('Response:', data);
        //   alert(`Join Request has been sent to ${props.name}`)
        //   setJoinState(true)

        }
        
    }
    function memRenderer(){
        return memList.map((mem, index) => (
            <div className="eachmember h-[2rem] w-full px-1 bg-[#D9E5D6] border-[1px] flex items-center justify-between">
                <div className="profile h-[1.5rem] w-[1.5rem] bg-white flex items-center justify-center rounded-full">
                    <CgProfile className='scale-[1.5]'/>
                </div>
                <div className="name px-2 w-[fit] bg-[#0FA3B1] text-center text-white overflow-hidden">
                    {mem.user_username}
                </div>
                {/* <div className="role bg-[#d5c3b9] px-1 w-[4rem] text-center text-white overflow-hidden cursor-pointer hover:bg-green-200"> */}
                    {!mem.is_teacher?
                    <div onClick={() => promote(token, mem.user_username)} className="role bg-[#d5c3b9] px-1 w-[4rem] text-center text-white overflow-hidden cursor-pointer hover:bg-green-200">Member</div>
                    :
                    <div onClick={() => demote(token, mem.user_username)} className="role bg-[#d5c3b9] px-1 w-[4rem] text-center text-white overflow-hidden cursor-pointer hover:bg-red-200">Teacher</div>
                    }    
                {/* </div> */}
            </div>
            
            
        ))}
    
    async function promote(auth_token, puser){
        const res = await fetch(`${api}/space/change_to_teacher/${spaceId}/${puser}/`,{
            method: "PATCH",
            
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Token "+ auth_token.toString()
                  },
            body: JSON.stringify({is_teacher: true
            })
        });

        const data = await res.json()
        
        if(!res.ok){
          alert(data)

        }else{
        // setMemList(data);
          console.log('Response:', data);
          alert('The user has been promoted.')
            memFetcher();
            memRenderer();
        //   alert(`Join Request has been sent to ${props.name}`)
        //   setJoinState(true)

        }
        
    }
    async function demote(auth_token, puser){
        const res = await fetch(`${api}/space/change_to_teacher/${spaceId}/${puser}/`,{
            method: "PATCH",
            
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Token "+ auth_token.toString()
                  },
            body: JSON.stringify({is_teacher: false
            })
        });

        const data = await res.json()
        
        if(!res.ok){
          alert(data)

        }else{
        // setMemList(data);
          console.log('Response:', data);
          alert('The user has been demoted.')
            memFetcher();
            memRenderer();
        //   alert(`Join Request has been sent to ${props.name}`)
        //   setJoinState(true)

        }
        
    }


        const [reqMemList, setReqMemList] = useState([]);

        async function reqMemFetcher(auth_token){
            const res = await fetch(`${api}/space/${spaceId}/request_manager/`,{
                method: "GET",
                
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": "Token "+ auth_token.toString()
                      }
                // body: {
    
                // }
            });
    
            const data = await res.json()
            
            if(!res.ok){
              alert(data)
    
            }else{
            setReqMemList(data);
            
              console.log('Response:', data);
            //   alert(`Join Request has been sent to ${props.name}`)
            //   setJoinState(true)
            }  
        }
        async function confirmReq(auth_token, rid){
            try{
            const res = await fetch(`${api}/space/${spaceId}/request_manager/`,{
                method: "PATCH",
                
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": "Token "+ auth_token.toString()
                      },
                body: JSON.stringify({ 
                    request_id: `${rid}`
                })
    
            });
    
            const data = await res.json()
            // body.data()
            
            if(!res.ok){
            //   alert(res.error.message)
              throw new Error(data.error)
    
            }else{
                alert(`User has been added to the space`)
                memFetcher();
                memRenderer();
                reqMemFetcher();
                reqMemRenderer();
            // setReqMemList(data);
            //   console.log('Response:', data);
            //   alert(`Join Request has been sent to ${props.name}`)
            //   setJoinState(true)
            }  
        }catch(error){
            alert(error.message);
            memFetcher();
            memRenderer();
            reqMemFetcher();
            reqMemRenderer();

        }
        }

        async function rejectReq(auth_token, rid){
            try{
            const res = await fetch(`${api}/space/${spaceId}/request_manager/`,{
                method: "DELETE",
                
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": "Token "+ auth_token.toString()
                      },
                body: JSON.stringify({
                    request_id: `${rid}`
                })
            });
    
            const data = await res.json()
            
            if(!res.ok){
            //   alert(data)
                throw new Error(data.error)
    
            }else{
                alert(`The join request has been rejected`);
                memFetcher();
                memRenderer();
                reqMemFetcher();
                reqMemRenderer();
            // setReqMemList(data);
            //   console.log('Response:', data);
            //   alert(`Join Request has been sent to ${props.name}`)
            //   setJoinState(true)
            } 
        }catch(error){
            alert(error.message);
                memFetcher();
                memRenderer();
                reqMemFetcher();
                reqMemRenderer();
        } 
        }



        function reqMemRenderer(){
            return reqMemList.map((mem, index) => (
                <div className="eachmember h-[2rem] w-full px-1 bg-[#D9E5D6] border-[1px] flex items-center justify-between">
                    <div className="profile h-[1.5rem] w-[1.5rem] bg-white flex items-center justify-center rounded-full">
                        <CgProfile className='scale-[1.5]'/>
                    </div>
                    <div className="name px-2 w-[6rem] bg-[#0FA3B1] text-center text-white overflow-hidden">
                        Someone
                    </div>
                    <div className='flex'>
                        <div className="addmem p-2 text-center text-[blue] overflow-hidden cursor-pointer">
                        {/* bg-[#F7A072] */}
                            <SlPlus onClick={()=> confirmReq(token, mem.request_id)} className='scale-[150%] hover:scale-[180%]'/>
                            {/* <RxCrossCircled/> */}
                        </div>
                        <div className="addmem p-2 text-center text-[red] overflow-hidden cursor-pointer">
                            <RxCrossCircled onClick={()=> rejectReq(token, mem.request_id)} className='scale-[170%] hover:scale-[200%]'/>
                        </div>
                    </div>
                </div>
            ))}


            // console.log(memList)
            function amiTeacher(user, memList){
                memList.map(mem => {
                    // console.log(mem.is_teacher)
                    console.log(mem.user_username == user);
                    if(mem.user_username == user){
                        // console.log(mem.is_teacher);
                        if(mem.is_teacher){
                            reqMemFetcher(token);
                            // console.log("here");
                            setiamTeacher(true);
                            localStorage.setItem(`${spaceId}`, iamTeacher)

                            // console.log(iamTeacher);
                        }
                    }
                    
            })};




            const [col, setCol] = useState([]);

        async function fetchCollections(auth_token){
            const res = await fetch(`${api}/space/${spaceId}/mcq/get_collections/`,{
                method: "GET",
                
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": "Token "+ auth_token.toString()
                        }
                // body: {
    
                // }
            });
    
            const data = await res.json()
            
            if(!res.ok){
                alert(data)
    
            }else{
                // alert(`The join request has been rejected`);
                // console.log(data);
                setCol(data);
                // console.log(data);
                // console.log(col);
                
            }  
        }

        function renderCollections(){
            return col.map(c =>(
                <Exlink to={`/dashboard/${spaceId}/${name}/${c.collectionId}/taketest`}>
                <div className="papers p-1 flex flex-col shadow-lg gap-1 hover:scale-[105%] transition-all">
                {!iamTeacher?
                    ""
                    :
                    <Exlink className='p-1 border-[1px] border-gray-300 text-center hover:bg-gray-200 transition-all' to={`/dashboard/${spaceId}/${name}/${c.collectionId}/createmcq`}>
                        Add Questions
                    </Exlink>
                }
            <div className="paper flex justify-between items-center bg-yellow-400">
                    Title: {c.name}
            
            </div>
            <div className="content flex flex-col">
                <div className="marks flex justify-between">
                    <div className="fullmarks">
                    F Marks: {c.marks}
                    </div>
                    <div className="passmarks">
                    P Marks: 

                    </div>
                </div>
                <div className="times flex justify-between">
                    <div className="time">
                        Time: {c.time_in_minutes} min

                    </div>
                    <div className="createdby">
                        By: {c.created_by}

                    </div>
                </div>
            </div>
        </div>
        </Exlink>
        ));

        }








            useLayoutEffect(()=>{
                // getUser(token);
                noticeFetcher(token)
                portalFetcher(token)
                memFetcher(token)
                getUser(token);
                // const usrn = user;
                // console.log(user);
                
                // console.log(iamTeacher);
                // console.log(user);
                // console.log("this ran");
                // {if(iamTeacher){
                //     reqMemFetcher(token);
                //     console.log("this ran");
                // }
                // }
            },[token])
            useLayoutEffect(()=>{
                amiTeacher(user, memList);
                fetchCollections(token)
            },[user, memList])


  return (
    <>
    
    <UpperNav/>
    {/* <Snackbar msg={"hello"}/> */}
    <section className='w-full h-[110%] flex justify-center bg-[#f6eff3] overflow-x-hidden'>
        
    {/* <div className="flex w-full max-w-sm items-center space-x-2">
      <Input type="email" placeholder="Email" />
      <Button type="submit">Subscribe</Button>
  </div> */}

  
    <div className='w-[100%] h-[95%] relative flex flex-col items-center'>
    <h1 className='text-[4rem] w-[70%] border-b-[1px] border-solid border-[black] mb-10'>
            {name}
        </h1>
    <div className="flex h-full w-full gap-5 px-5 ">
    <div className="members w-[15%] px-2 shadow-lg bg-white before h-full overflow-y-auto flex flex-col gap-1">
        <div className='flex justify-between items-center'>
            <h1 className='text-[1.5rem]'>
                Members:
            </h1>
            <div className="add">
                {/* <SlPlus className='scale-[150%]'/> */}
                {!iamTeacher?
                    ""
                :
                <AddMembers spaceId={spaceId} fetcher={memFetcher} renderer={memRenderer}/>
                }
                
            </div>
        </div>
        <div className="memberlist h-[45%] overflow-y-auto border-[1px] border-gray-300">
            {/* <div className="eachmember h-[2rem] w-full px-1 bg-[#D9E5D6] border-[1px] flex items-center justify-between">
                <div className="profile h-[1.5rem] w-[1.5rem] bg-white flex items-center justify-center rounded-full">
                    <CgProfile className='scale-[1.5]'/>
                </div>
                <div className="name px-2 w-[6rem] bg-[#0FA3B1] text-center text-white overflow-hidden">
                    Someone
                </div>
                <div className="role bg-[#F7A072] px-2 w-[4rem] text-center text-white overflow-hidden">
                    Admin
                </div>
            </div> */}
            {memRenderer()}
        </div>
        <div className='flex justify-between items-center'>
            <h1 className='text-[1.5rem]'>
                Requests:
            </h1>
        </div>
        <div className="requestedmember h-[44%] overflow-y-auto border-[1px] border-gray-300">
                {reqMemRenderer()}
        </div>
    </div>
    <div className="allcontent bg-white h-[full] w-[72%] overflow-y-auto border-2 border-solid flex flex-col justify-between p-2">
        { iamTeacher ?
            <CreateNotice spaceId={spaceId} fetcher={noticeFetcher} renderer={noticeRenderer}/>
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
                        { iamTeacher ?
                    <CreatePortal spaceId={spaceId} fetcher={portalFetcher} renderer={portalRenderer}/>
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
    <div className="resources relative w-[16%] h-full bg-white shadow-lg flex flex-col">
        <div className="calendar p-4 flex">
            Events: 
            <div className='absolute left-[84%] top-5'>
            {<IoCalendar className='scale-[300%]'/>}
            </div>
        <div>
        <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            dateFormat="MMMM d, yyyy"
            showPopperArrow={false}
            className='absolute top-10 w-[7rem] border-[1px] border-gray-300 text-center'
        />
        </div>
        <div className='absolute bottom-0 left-0 w-full h-[60%] p-2 flex flex-col justify-between items-center'>
            <div className='w-full'>
                MCQs:
                <div className='left-[2.5%] absolute w-[95%] h-[80%] overflow-y-auto flex flex-col gap-2 border-2 p-2 border-gray-200'>
                   {renderCollections()}
                </div>
            </div>
            {!iamTeacher?
                ""
                :
            <div className='flex flex-col'>
                <CreateCollection spaceId={spaceId} renderer={renderCollections} fetcher={fetchCollections}/>
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

