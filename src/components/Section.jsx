import React from 'react'
import brain from "../assets/brain.jpg"
import { useNavigate } from 'react-router-dom'

function Section({name,image,category,id,route}) {
    const navigate=useNavigate();
  return (
    <>
    <div className='w-[280px] h-[380px] bg-gray-900 p-3 flex flex-col gap-4 justify-center rounded-lg shadow-md shadow-gray-700 hover:border-2 border-indigo-600'>
        <div className='w-[100%] h-[60%] overflow-hidden rounded-lg border-2 border-black'>
            <img src={image} alt="" 
            className='object-cover rounded-lg w-full h-full'/>

        </div>
        <div className='text-2xl font-semibold text-center '>
            {name}
        </div>
        <button className='w-full p-3 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-lg font-medium text-nowrap hover:opacity-70 transition-all duration-300 cursor-pointer'
        onClick={()=> navigate(route)}>
            Explore
        </button>
        </div>
        </>
  )
}

export default Section