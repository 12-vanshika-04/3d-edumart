import React, { useContext } from 'react'
// import { Categories } from '../Categories'
import Topics from './Topics'
import { dataContext } from '../context/UserContext'
import Footer from "./Footer";
import Scroll from './Scroll';

function Gallery() {
    let {input,setInput,cate,setCate}=useContext(dataContext)
  return (
    <div>
       <div className='w-full h-[100px] flex justify-center items-center px-9 ' >
        <form 
        onSubmit={(e)=>e.preventDefault()}
        className='w-[85%] h-[60pxb] flex items-center px-5 bg-gray-700 rounded-md shadow-md shadow-gray-500 '>
            
            <input type="text"
            placeholder='Search Models....'
            className='w-[100%] outline-none text-[20px] items-center bg-gray-700 py-2'
            onChange={(e)=>setInput(e.target.value)} 
            value={input} /> 
            </form>
       </div>
       <Topics/>
       <Scroll/>
    </div>
  )
}

export default Gallery