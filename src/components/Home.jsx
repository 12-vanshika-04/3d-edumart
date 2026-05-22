import React from "react";
import { Link } from "react-router-dom";
import Scroll from "./Scroll";
import Gallery from "./Gallery";
import { useNavigate } from 'react-router-dom';
import "../App.css"


const Home=()=>{
  const navigate=useNavigate();
  return(
  <main className="relative w-full min-h-screen overflow-hidden flex justify-center ">
    <video src="/background.mp4"
    loop
    autoPlay
    muted
    playsInline
    className="w-full h-full object-cover absolute top-0 first-letter:left-0 -z-10"
    ></video>
    <div className="absolute bottom-[15%] flex flex-col items-center gap-5">
      <div class="logo">
  <span class="edu">Edu</span>
  <span class="verse">Verse</span>
</div>
        
      <h1 className="md:text-2xl text-1xl font-bold text-gray-300">Explore, Capture, Learn</h1>
      <div className="md:w-[75%] w-[60%] h-[0.1px] bg-[#baba]"></div>
      <button className="h-10 px-16 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-lg font-medium text-nowrap hover:opacity-70 transition-all duration-300"
       onClick={()=> navigate("/gallery")}>
          EXPLORE NOW
        </button>
        <div className="flex items-center gap-5 text-3xl font-extrabold text-gray-200">
          <img className="md:h-16 h-12"
          src="3DCreation2.png" alt="logo" />VISUALIZE
        </div>
        <p className="max-w-[80% text-center text-[#babaff]"></p>
    </div>
    
  </main>
  )

}

export default Home
  