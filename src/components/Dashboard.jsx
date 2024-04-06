// import { useState,  useEffect } from "react";
import Navbar from "./Navbar";
import Spaces from "./Spaces";
import { Outlet } from 'react-router-dom';


export default function Dashboard() {
    // const token = localStorage.getItem("auth_token");
    // const [spaces, setSpaces] = useState(null);
    // async function getSpace(auth_token){
    //     const res = await fetch("http://127.0.0.1:8080/space/all_spaces/",{
    //         method: "GET",
    //             headers: {
    //                 "Content-Type": "application/json",
    //                 "Authorization": "Token "+ auth_token.toString()
    //               },
    //     })
    //     const data = await res.json()
        
    //     setSpaces(data)
    // }

    // useEffect(()=>{
    //     getSpace(token);
    // },[])

    // console.log(spaces)
    return(
        <section className='h-screen w-screen relative'>
            {/* <outlet/> */}
            <Outlet/>
            <Navbar/>
            {/* <Spaces/> */}
        </section>
    )

}