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
import MCQ from './components/MCQ'
import CreateMCQ from './components/CreateMCQ'
import MCQRender from './components/MCQRender';
// import { spaceDataContainer } from './components/Spaces';

function App() {

  return (
    // <spaceDataContainer.Provider>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Landing/>} />
        <Route path="signin" element={<Signin/>} />
        <Route path='signup' element={<SignUp/>}/>
        <Route path='dashboard' element={<Dashboard/>}>
          <Route index path="spaces" element={<Spaces/>} />
          <Route path=":spaceId/:name" element={<SingleSpace/>}/>
          <Route path='explore' element={<Explore/>}/>
          <Route path=":spaceId/:colId/createmcq" element={<CreateMCQ/>}/>  
        </Route> 
        {/* <Route path='mcq' element={<MCQRender/>}/>
        <Route path='createmcq' element={<CreateMCQ/>}/> */}
    </Routes>
    </BrowserRouter>
    // </spaceDataContainer.Provider>
  )
}

export default App
