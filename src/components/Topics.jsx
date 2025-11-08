import React, { useEffect } from 'react'
import { Categories } from './Categories.jsx'
import Section from './Section.jsx'
import { DomainItems } from './Domain.jsx'
import { useState } from 'react'
import { dataContext } from '../context/UserContext.jsx'
import { useContext } from 'react'

function Topics() {
    let{input,setInput,cate,setCate}=useContext(dataContext)
    useEffect(()=>{
        let newList=DomainItems.filter((item)=>item.domain_name.includes(input)||item.domain_name.toLowerCase().includes(input))
        setCate(newList)
    },[input])
    function filter(category){
        if(category==="All"){
            setCate(DomainItems)
        }
        else{
            let newList=DomainItems.filter((item)=>(item.domain_category===category))
            setCate(newList)
        }
    }
  return (
    <div>
            {!input?<nav>
            <div className='flex flex-wrap justify-center items-center gap-5 w-[100%] '>
                {Categories.map((item)=>{
                    return(
                        <div className='w-[140px] h-[150px] flex flex-col items-center gap-5 justify-center text-[20px] font-semibold rounded-lg shadow-md shadow-gray-600 bg-gradient-to-r from-purple-500 to-indigo-600 text-nowrap hover:opacity-70 transition-all duration-300 cursor-pointer ' 
                        onClick={()=>filter(item.name)}>
                        {/* {item.icon} */}
                        {item.name}
                        </div>
                    )
                })}
            </div>
        </nav> : null}
        <div className='w-full flex flex-wrap gap-8 px-5 pt-8 items-center justify-center pb-8 shadow-md shadow-gray-700'>
            {cate.map((item)=>{
                return(
                    <div>
                <Section name={item.domain_name} image={item.domain_image} category={item.domain_category} id={item.id} route={item.route}/>
                </div>
            )
                }
            
            )}
        </div>
        
       
       </div>
    
  )
}

export default Topics