import React, {useContext} from 'react'
import { GeneralContext } from '@/app/components/context';
import { FiMoon } from "react-icons/fi";
import { Typography } from '@mui/material';
import {Box} from '@mui/material'

const Header = () => {
  const { darkMode , setDarkMode} = useContext(GeneralContext);
  const dark = 'bg-black text-white';
  return (
    <Box 
    sx={{
      width: '100%',
      height: '104px',
      display: {md: 'flex', xs: 'none'},
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingTop: '27px',
      paddingBottom: '27px',
    }}>
        <Typography
        sx={{
          fontSize: { xs: "1rem", md: "1.5rem" },
          fontWeight: 700,
          marginLeft: { xs: "10px", md: "0px" },
        }}
        className='text-sm font-bold md:text-2xl '>
          My Portfolio
        </Typography>
        <div className= {`cursor-pointer p-4 border rounded-full ${darkMode ? dark: 'bg-[#EBF2FA] border-gray-400'}`} onClick={() => { setDarkMode(!darkMode); console.log(darkMode) }}>
        <FiMoon />
        </div>
      </Box>
  )
}

export default Header