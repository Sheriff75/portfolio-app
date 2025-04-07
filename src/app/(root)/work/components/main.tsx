'use client'
import React, {useContext, useState} from 'react'
import Link from 'next/link'
import { AiOutlineHome } from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";
import { TbBriefcase2 } from "react-icons/tb";
import { BiSolidContact } from "react-icons/bi";
import { GeneralContext } from '@/app/components/context';
import Image from 'next/image';
import { Box, Container, Typography, Button } from '@mui/material';

const Main = () => {
    const {darkMode} = useContext(GeneralContext)
    const [activeTab, setActiveTab] = useState<string>('All');

    const handleTabClick = (tab: any) => {
    setActiveTab(tab);
  };

  const tabs = [
    {name: 'All'}, {name : 'Web Development'}, {name: 'App Development'}, {name: 'Design'}, {name: 'Mentorship'}];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'All':
        return (
            <Box 
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '5px',
                mt:'10px',
                justifyContent: {xs: 'center', lg: 'space-evenly'},
            }}>
                <Link href='https://mortgage-calculator-tz14.vercel.app/'>
                <Box
                sx={{
                    width: {md: '350px', xs: '250px'},
                    padding: '5px',
                    height: '150px',
                    borderRadius: '20px',
                    paddingBottom: '7px',
                    paddingTop: '7px',
                    gap:'7px',
                    display: 'flex',
                    flexDirection: 'column',
                }}
                className= {` ${darkMode ? 'bg-black' : 'bg-[#FFE3BF]'}`}>
                    <div className='w-full h-full rounded-[20px] overflow-hidden'>
                    <Image alt='calculator' src={mortgage} width={304} height={100} className='object-cover w-full h-full' />
                    </div>
                    <Typography
                    sx={{
                        fontSize: {
                            xs: '9px',
                            md: '13px'},
                            fontWeight: 700,
                        marginLeft: '2px',
                        alignItems: 'center',
                        justifyContent: 'center',
                        display: 'flex',
                    }}>Mortgage Calculator</Typography>
                </Box>
                </Link>

                <Link href='https://newsletter-sepia.vercel.app/'>
                <Box
                sx={{
                    width: {md: '350px', xs: '250px'},
                    padding: '5px',
                    height: '150px',
                    borderRadius: '20px',
                    paddingBottom: '7px',
                    paddingTop: '7px',
                    gap:'7px',
                    display: 'flex',
                    flexDirection: 'column',
                }}
                className= {` ${darkMode ? 'bg-black' : 'bg-[#FFE3BF]'}`}>
                    <div className='w-full h-full rounded-[20px] overflow-hidden'>
                    <Image alt='newsletter' src={newspaper} width={304} height={100} className='object-cover w-full h-full' />
                    </div>
                    <Typography
                    sx={{
                        fontSize: {
                            xs: '9px',
                            md: '13px'},
                            fontWeight: 700,
                        marginLeft: '2px',
                        alignItems: 'center',
                        justifyContent: 'center',
                        display: 'flex',
                    }}>Newsletter</Typography>
                    </Box>
                </Link>

                <Link href='https://ticket-generator-psi.vercel.app/'>
                <Box
                sx={{
                    width: {md: '350px', xs: '250px'},
                    padding: '5px',
                    height: '150px',
                    borderRadius: '20px',
                    paddingBottom: '7px',
                    paddingTop: '7px',
                    gap:'7px',
                    display: 'flex',
                    flexDirection: 'column',
                }}
                className= {` ${darkMode ? 'bg-black' : 'bg-[#FFE3BF]'}`}>
                    <div className='w-full h-full rounded-[20px] overflow-hidden'>
                    <Image alt='ticket' src={ticket} width={304} height={100} className='object-cover w-full h-full' />
                    </div>
                    <Typography
                    sx={{
                        fontSize: {
                            xs: '9px',
                            md: '13px'},
                            fontWeight: 700,
                        marginLeft: '2px',
                        alignItems: 'center',
                        justifyContent: 'center',
                        display: 'flex',
                    }}>Ticket Generator</Typography>
                </Box>
                </Link>

                <Link href= 'https://contact-form-flax-xi.vercel.app/'>
                <Box
                sx={{
                    width: {md: '350px', xs: '250px'},
                    padding: '5px',
                    height: '150px',
                    borderRadius: '20px',
                    paddingBottom: '7px',
                    paddingTop: '7px',
                    gap:'7px',
                    display: 'flex',
                    flexDirection: 'column',
                }}
                className= {` ${darkMode ? 'bg-black' : 'bg-[#FFE3BF]'}`}>
                    <div className='w-full h-full rounded-[20px] overflow-hidden'>
                    <Image alt='contact' src={contact} width={304} height={100} className='object-cover w-full h-full' />
                    </div>
                    <Typography
                    sx={{
                        fontSize: {
                            xs: '9px',
                            md: '13px'},
                            fontWeight: 700,
                        marginLeft: '2px',
                        alignItems: 'center',
                        justifyContent: 'center',
                        display: 'flex',
                    }}>Contact Form</Typography>
                </Box>
                </Link>
            </Box>
        );
    case 'Web Development' :
        // return(
        //     <div className= {`w-[350px] h-[150px] rounded-[20px] ${darkMode ? 'bg-black' : 'bg-[#FFE3BF]'}`}>

        //     </div>
        // );
    case 'App Development' :
        // return(
        //     <div className= {`w-[350px] h-[150px] rounded-[20px] ${darkMode ? 'bg-black' : 'bg-[#FFE3BF]'}`}>
    
        //     </div>
        // );
    case 'Design' :
        // return(
        //     <div className= {`w-[350px] h-[150px] rounded-[20px] ${darkMode ? 'bg-black' : 'bg-[#FFE3BF]'}`}>
    
        //     </div>
        // );
    
    case 'Mentorship' :
        // return(
        //     <div className= {`w-[350px] h-[150px] rounded-[20px] ${darkMode ? 'bg-black' : 'bg-[#FFE3BF]'}`}>
        
        //     </div>
        // );   
      default:
        return null;
  }
}
        const mortgage = '/mortgage.jpg'
        const newspaper = '/newspaper.jpg'
        const ticket = '/ticket.jpg'
        const contact = '/contact.jpg'

  return (
    <Box
    sx={{
        display: 'flex',
        flexDirection: 'column',
        maxWidth: {
            xs: '100vw',
            md: '100%'
        },
        marginTop: {
            xs: '1.8rem',
            md: '0px'
        }
        
    }}>
        <Box 
        sx={{
          display: {
            xs: 'none',
            md: 'flex'
          },
          justifyContent: 'space-evenly',
          width: '503px',
          height: '95px',
          border: '1px solid gray',
          borderRadius: '20px',
          alignSelf: 'end',
          alignItems: 'center',
          padding: '5px',
          marginBottom: '2px'
        }} >
            <Link href='/'>
            <button
           
            className= {`p-3 cursor-pointer w-[60px] h-[60px] text-center flex flex-col xs:text-[10px] lg:text-[13px]  items-center rounded-[10px] gap-1 ${darkMode ? 'bg-gray-500 hover:bg-gray-400 ' : ' bg-[#EBF2FA] hover:bg-orange-500'}`}>
                <AiOutlineHome /> 
                Home
            </button>
            </Link>
            <Link href='/resume'>
            <button className= {`p-3 cursor-pointer w-[60px] h-[60px] text-center flex flex-col items-center rounded-[10px] xs:text-[10px] lg:text-[13px] gap-1 ${darkMode ? 'bg-gray-500 hover:bg-gray-400 ' : ' bg-[#EBF2FA] hover:bg-orange-500'}`}>
                <CgFileDocument /> 
                Resume
            </button>
            </Link>
            <Link href='/work'>
            <button className= {`p-3 cursor-pointer w-[60px] h-[60px] text-center flex flex-col items-center rounded-[10px] xs:text-[10px] lg:text-[13px] gap-1 ${darkMode ? 'bg-gray-500 hover:bg-gray-400 ' : ' bg-[#EBF2FA] hover:bg-orange-500'}`}>
                <TbBriefcase2 /> 
                Work
            </button>
            </Link>
            <Link href='/contact'>
            <button className= {`p-3 cursor-pointer w-[60px] h-[60px] text-center flex flex-col items-center rounded-[10px] xs:text-[10px] lg:text-[13px] gap-1 ${darkMode ? 'bg-gray-500 hover:bg-gray-400 ' : ' bg-[#EBF2FA] hover:bg-orange-500'}`}>
                <BiSolidContact /> 
                Contact
            </button>
            </Link>
        </Box >

    <Box
                sx={{
                    minWidth: {
                        xs: '100%',
                        md: '100%'
                    },
                    minHeight: '660px',
                    marginTop: '20px',
                    marginBottom: '5px',
                    alignSelf: 'end',
                    borderRadius: {md:'20px', xs: '0px'},
                    paddingLeft: {
                        xs: '5px',
                        md: '15px'},
                    paddingRight: {
                            xs: '5px',
                            md: '15px'},
                    paddingTop: '5px',
                    paddingBottom: '5px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: {
                        xs: 'center',
                    },
                }}
                className={` ${darkMode ? 'bg-gray-700':'bg-[#FFFFFF]'}`}>
        <Container 
                sx ={{
                    display: 'flex',
                    paddingTop: '5px',
                    margin: '0'
                }} >
                    <Typography 
                    sx={{
                        fontSize: {
                            xs: '1rem',
                            md: '1.2rem'
                        },
                        fontWeight: 700,
                        marginLeft: {
                            xs: '10px',
                            md: '0px'
                        },
                    }}>Resume</Typography>
                    <Typography 
                    sx={{
                        fontSize: {
                            xs: '11px',
                            md: '14px'
                        },
                        
                        marginLeft: {
                            xs: '2px',
                            md: '5px'
                        },
                        color: darkMode ? 'gray.300' : 'orange.500'
                    }}>
                    ____________________________
                    </Typography>
                    </Container>

            <Container
            sx={{
                display: 'flex',
                gap: "5px",
                mt: '10px',
                justifyContent: 'end',
            }}>
                {tabs.map( (tab, index) => (
                    <Button
                    onClick={() => handleTabClick(tab.name)}
                    key={index}             
                    >
                    <Typography 
                    sx={{
                        fontSize: {
                            xs: '9px',
                            md: '10px'
                        },
                    }}
                     className = {`${activeTab === tab.name ? 'text-red-500 hover:text-red-300' : darkMode ? 'text-white hover:text-gray-300' : 'text-black hover:text-gray-500'}`}>
                        {tab.name}
                    </Typography>
                    </Button>
                ))}
            </Container>
            <div>
                {renderTabContent()}
            </div>
    </Box>
</Box>
  )
}

export default Main