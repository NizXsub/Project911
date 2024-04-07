import React from 'react';
import UpperNav from "./UpperNav.jsx";
import LandingImg from "../assets/Landing.png"
import './Landing.css'
import {Link as Exlink} from 'react-router-dom';


export default function Landing() {
  return (
    <section className='w-screen h-screen'>
      <UpperNav/>
      <div className="landing-page bg-gray-100 py-16 h-[95%] w-screen flex">
      <div className="container mx-auto flex items-center justify-center">
        <div className="text-left w-1/2 flex flex-col">
          <h1 className="text-6xl font-bold mb-4">Welcome to</h1>
          <h1 className="text-6xl font-bold mb-4">ScholarSYnc</h1>
          <p className="text-lg mb-4">A platform to collaborate on homework with your peers.</p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-1/4">
            <Exlink to="dashboard/spaces">
            Get Started
            </Exlink>
            </button>
        </div>
        <div className="image w-1/2">
          {/* SVG or image centered on the right side */}
          <img src={LandingImg} alt="Homework Collaboration" className="mx-auto landing-img" />
        </div>
      </div>
    </div>
    </section>
  )
}