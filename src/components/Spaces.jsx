import React from 'react';
import SpaceCard from './SpaceCard';
import { Link as Exlink } from 'react-router-dom';
import UpperNav from './UpperNav';
import CreateSpace from './CreateSpace.jsx';
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"


export default function Spaces() {
  const token = localStorage.getItem("auth_token");
  const [spacesObj, setspacesObj] = React.useState([]);

  async function spaceFetcher(auth_token){
      const res = await fetch("https://homework-collab-production.up.railway.app/space/",{
        // const res = await fetch("http://127.0.0.1:8000/space/all_spaces/",{
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Token "+ auth_token.toString()
          },
  
    })
    const data = await res.json();
    console.log(data);
    setspacesObj(data);
    // console.log(spacesObj.length)
  }

  React.useEffect(()=>{
    // getUser(token);
    spaceFetcher(token)
},[])

function cardRenderer(){
  return spacesObj.map((card, index) => (
    // <Exlink to='/dashboard/singlespace'>
    // console.log(card.name);
        <SpaceCard key={index} spaceId={card.spaceId} name={card.name}/>
        // console.log(card.name)
      // </Exlink>
  ))
}

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
    {!spacesObj.length < 1 ?
    <div className='h-[75%] border-2 flex flex-wrap gap-5 bg-white'>
     {cardRenderer()}
     </div>
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