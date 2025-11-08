import React, { createContext, useState } from 'react'
export const dataContext= createContext()
import { DomainItems } from '../components/Domain'

function UserContext({children}) {
    let[input,setInput]=useState("")
    let[cate,setCate]=useState (DomainItems)
    let data={
        input,
        setInput,
        cate,
        setCate
    }
  return (
    <div>
        <dataContext.Provider value={data}>
        {children}
        </dataContext.Provider>
    </div>
  )
}

export default UserContext