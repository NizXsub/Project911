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
  // const [trackSpaces, setTrackSpaces] = React.useState(props.spaceCount);

  async function spaceFetcher(auth_token){
      // const res = await fetch("https://homework-collab-production.up.railway.app/space/",{
        const res = await fetch("http://127.0.0.1:8000/space/",{
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Token "+ auth_token.toString()
          },
  
    })
    const data = await res.json();
    console.log(data);
    setspacesObj(data);
    // setTrackSpaces(setspacesObj.length);
    // console.log(spacesObj.length)
  }

  React.useEffect(()=>{
    // getUser(token);
    spaceFetcher(token)
},[])

// React.useEffect(()=>{
//   // getUser(token);
//   spaceFetcher(token)
// },[trackSpaces])

function cardRenderer(){
  return spacesObj.map((card, index) => (
    <Exlink to={`/dashboard/${card.spaceId}`}>
    {/* // console.log(card.name); */}
        <SpaceCard keyer={index} spaceId={card.spaceId} name={card.name}/>
        {/* // console.log(card.name) */}
      </Exlink>
  ))
}

  return (
    <>
    <UpperNav/>
    <section className='w-screen h-fit flex justify-center bg-[#f6eff3]'>
      
    {/* <div className="flex w-full max-w-sm items-center space-x-2">
      <Input type="email" placeholder="Email" />
      <Button type="submit">Subscribe</Button>
    </div> */}
    <div className='w-[70%]'>
      <div className='flex justify-between h-[6rem] items-center'>
    <h1 className='text-[4rem] '>My Spaces</h1>
    {!spacesObj.length < 1?
    <CreateSpace/>
    :
    ''
}
    </div>
    {!spacesObj.length < 1 ?
    <div className='h-[80%] p-5 border-2 flex flex-wrap gap-5'>
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