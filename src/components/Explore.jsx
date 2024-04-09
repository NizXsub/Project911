import React from 'react'
import UpperNav from './UpperNav'
import SpaceCard from './SpaceCard'

const Explore = () => {
  const token = localStorage.getItem("auth_token");
  const [allSpacesState, setallSpacesState] = React.useState();

  async function fetchAllSpaces(auth_token){
    const res = await fetch("https://homework-collab-production.up.railway.app/space/all_spaces/",{
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Token "+ auth_token.toString()
      }
    })
    const data = await res.json();
    console.log("All :"+ data);
    setallSpacesState(data);

  }
React.useEffect(()=>{
  fetchAllSpaces(token)
},[])


  return (
    <>
    <UpperNav/>

    <section className='w-screen h-screen flex flex-col items-center bg-[#f6eff3]'>
      
    {/* <div className="flex w-full max-w-sm items-center space-x-2">
      <Input type="email" placeholder="Email" />
      <Button type="submit">Subscribe</Button>
    </div> */}
    <div className='w-[70%]'>
    <h1 className='text-[4rem] border-b-[1px] border-solid border-[black] mb-10'>Explore Spaces</h1>
    </div>
    <div>
        <form class="w-[50rem]">   
            <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
            <div class="relative">
                <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg class="w-4 h-4 text-gray-500 dark:text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                    </svg>
                </div>
                <input type="search" id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 bg-gray-50 focus:ring-blue-500 focus:border-green-500  dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Public Spaces (Name or Id)" required/>
                <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
            </div>
        </form>
    </div>
    <div className="explorespaces h-full w-[70%] border-2 flex p-10 gap-10">
        <SpaceCard explore={true} spaceData={allSpacesState}/>
        <SpaceCard explore={true} spaceData={allSpacesState}/>
    </div>
    </section>






    </>
  )
}

export default Explore