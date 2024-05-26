import { useState,  useEffect, useLayoutEffect } from "react";
import Navbar from "./Navbar";
import Spaces from "./Spaces";
import { Outlet, useNavigate } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';


export default function Dashboard() {
  const navigate = useNavigate()
    
    
    // const [spaces, setSpaces] = useState(null);
    // async function getSpace(auth_token){
    //     const res = await fetch("http://127.0.0.1:8000/space/all_spaces/",{
    //         method: "GET",
    //             headers: {
    //                 "Content-Type": "application/json",
    //                 "Authorization": "Token "+ auth_token.toString()
    //               },
    //     })
    //     const data = await res.json()
        
    //     setSpaces(data)
    // }

    useEffect(()=>{
      const token = localStorage.getItem("auth_token");
      console.log(token)
      if(token){
        // window.location.href="/signin"

      }else{
        alert("You haven't signed up. Please do that first.")
        navigate("/signup");
        // alert(`${x.username == undefined ? "":x.username}\n${x.email == undefined ? "":x.email}\n${x.password == undefined ? "":x.password}`)
      }  

    },[])

    // console.log(setSpaces)

    // let navigate = useNavigate();
    // useLayoutEffect(() => {
    // navigate("spaces")
    // // your pre layout code (or 'effect') here.
    
    // }, [])
    const [scrollDirection, setScrollDirection] = useState(true);
    window.onscroll = function(e) {
        // print "false" if direction is down and "true" if up
        setScrollDirection(this.oldScroll > this.scrollY);
        // console.log(scrollDirection);
        this.oldScroll = this.scrollY;
      }
    return(
        <section className='h-screen w-screen relative'>
            {/* <outlet/> */}
            <Outlet/>
            <Navbar scroll={scrollDirection}/>
            {/* <Spaces/> */}
        </section>
    )

}