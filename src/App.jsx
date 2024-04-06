import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import SignUp from "./components/Signup";
import Signin from "./components/Signin";
// import Navbar from "./components/Navbar";
import Landing from './components/Landing';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
import Spaces from './components/Spaces';
import SingleSpace from './components/SingleSpace';
import Explore from './components/Explore';

function App() {

  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Landing/>} />
        <Route path="signin" element={<Signin/>} />
        {/* <Route path='dashboard' element={<Dashboard/>}/> */}
        <Route path='signup' element={<SignUp/>}/>
        <Route path='dashboard' element={<Dashboard/>}>
          <Route index path="spaces" element={<Spaces/>} />
          <Route path="singlespace" element={<SingleSpace/>}/>
        </Route> 
        {/* <Route path='singlespace' element={<SingleSpace/>}/> */}
        <Route path='explore' element={<Explore/>}/>
    </Routes>
    {/* <div className='absolute bottom-4 h-fit w-screen flex justify-center'>
      <Navbar/>
    </div> */}
    </BrowserRouter>
  )
}

export default App
