import React from "react";
import { FaGraduationCap, FaGlobe, FaBook } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import Footer from "./Footer";


export default function About() {
  const navigate=useNavigate();
  return (
    <div className="min-h-screen bg-black flex flex-col items-center p-6">
      {/* Header Section */}
      <header className="w-full max-w-6xl text-center mb-12">
        <h1 className="text-4xl font-bold text-purple-500 mb-4">
          About Our 3D Educational Platform
        </h1>
        <p className="text-gray-300 text-lg">
          Bringing immersive 3D learning experiences to students and educators worldwide.
        </p>
      </header>

      {/* Features Section */}
      <section className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="bg-gray-700 font-medium p-6 rounded-xl shadow hover:shadow-lg hover:opacity-70 transition-all duration-300 cursor-pointer">
          <FaGraduationCap className="text-blue-400 text-4xl mb-4" />
          <h2 className="text-2xl text-black font-bold mb-2">Education Focused</h2>
          <p className="text-white">
            All our 3D models and interactive simulations are designed to enhance learning and understanding.
          </p>
        </div>
        <div className="bg-gray-700 p-6 rounded-xl shadow hover:shadow-lg transition duration-300">
          <FaGlobe className="text-green-500 text-4xl mb-4" />
          <h2 className="text-2xl text-black font-bold mb-2">Global Access</h2>
          <p className="text-white">
            Students and teachers can access 3D educational content from anywhere, anytime.
          </p>
        </div>
        <div className="bg-gray-700 font-medium p-6 rounded-xl shadow hover:shadow-lg transition duration-300">
          <FaBook className="text-red-600 text-4xl mb-4" />
          <h2 className="text-2xl text-black font-bold mb-2">Interactive Learning</h2>
          <p className="text-white">
            Our platform uses interactive 3D models to make learning engaging and effective.
          </p>
        </div>
      </section>

      {/* 3D Model Section */}
      <section className="w-full max-w-6xl mb-12">
        <h2 className="text-3xl font-bold text-center text-purple-500 mb-6">Try 3D Models</h2>
        <div className="flex flex-col gap-5 items-center">
          {/* Placeholder for Spline 3D embed */}
          <div> <p className="text-gray-200 text-lg text-center">
            Have a look
          </p></div>
         <div>
         <button className=" self-center h-8 px-6 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-lg font-medium text-nowrap hover:opacity-70 transition-all duration-300"
        onClick={()=> navigate("/gallery")}>
          EXPLORE NOW
        </button>
         </div>
          
        </div>
      </section>

      {/* Footer Section */}
    </div>
  );
}
