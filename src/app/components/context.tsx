'use client'
import React, {createContext, useState} from 'react'


export const GeneralContext = createContext<{
    darkMode: boolean, 
    setDarkMode: React.Dispatch<React.SetStateAction<boolean>>}>
({darkMode: false, 
  setDarkMode: () => {}
})
const Context: React.FC<{children: React.ReactNode}> = ({children}) => {
    const [darkMode, setDarkMode] = useState(false)

    const contextValues = {
        darkMode,
        setDarkMode
    }
  return (
    <GeneralContext.Provider value={contextValues}>
        {children}
        </GeneralContext.Provider>
  )
}

export default Context