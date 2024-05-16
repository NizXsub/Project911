import React from 'react'
import UpperNav from './UpperNav'
import SpaceCard from './SpaceCard'
import {api} from './variables.js'
import Snackbar from './Snackbar.jsx'

const Explore = () => {
  const token = localStorage.getItem("auth_token");
  const [allSpacesState, setallSpacesState] = React.useState([]);
  const [searchQuery, setSearchQuery] = React.useState('');

  async function fetchAllSpaces(auth_token) {
    const res = await fetch(`${api}/space/all_spaces/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Token " + auth_token.toString()
      }
    });
    const data = await res.json();
    setallSpacesState(data);
  }

  React.useEffect(() => {
    fetchAllSpaces(token)
  }, [])

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredSpaces = allSpacesState.filter(space =>
    space.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  function cardRenderer(spaces) {
    return spaces.map((card, index) => (
      <SpaceCard
        keyer={index}
        spaceId={card.spaceId}
        name={card.name}
        explore={true}
        // renderer={sRenderer}
      />
    ))
  }


  return (
    <>
      <UpperNav />
      <section className='w-screen h-auto flex flex-col items-center'>
        <div className='h-[6rem] w-[70%] flex justify-between items-center'>
          <h1 className='text-[4rem]'>Explore Spaces</h1>
          <form class="w-[50rem]">
            <label htmlFor="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
            <div class="relative">
              <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg class="w-4 h-4 text-gray-500 dark:text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                class="cursor-auto block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 bg-gray-50 focus:ring-blue-500 focus:border-green-500 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search Public Spaces (Name or Id)"
                required
                value={searchQuery}
                onChange={handleSearch}
              />
              <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
            </div>
          </form>
        </div>
        <div className="explorespaces h-auto w-[75%] border-2 flex flex-wrap p-10 gap-10 justify-center">
          {cardRenderer(filteredSpaces)}
        </div>
      </section>
    </>
  )
}

export default Explore