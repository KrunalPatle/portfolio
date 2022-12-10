import React, { createContext, useState } from 'react'


let data=createContext()
const Store = (props) => {
    let [mode,setMode]=useState(false)
  return (
    <>
        <data.Provider value={{mode,setMode}}>
            {props.children}
        </data.Provider>
    </>
  )
}

export default Store
export {data}