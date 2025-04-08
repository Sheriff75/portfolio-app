'use client'
import React, {useContext} from 'react'
import Link from 'next/link'
import { AiOutlineHome } from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";
import { TbBriefcase2 } from "react-icons/tb";
import { BiSolidContact } from "react-icons/bi";
import { GeneralContext } from '@/app/components/context';
import { RiGraduationCapLine } from "react-icons/ri";
import { HiOutlineBriefcase } from "react-icons/hi";
import { Box, Container, Typography, Stack} from '@mui/material';

const Main = () => {
    const {darkMode} = useContext(GeneralContext)
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
        <Box
        sx = {{
            pl: {
                xs: '5px',
                md: '15px'
            },
            pr: {
                xs: '5px',
                md: '15px'
            },
            pb: {
                xs: '3px',
                md: '7px'
            },
            borderTopLeftRadius: '20px',
            borderTopRightRadius: '20px',
        }}
        className={`${darkMode ? 'bg-gray-700':'bg-[#FFFFFF]' }`}>
            
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
            }}>Work</Typography>
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

            <Box
            sx={{
                display: 'flex',
                flexDirection: {
                    xs: 'column',
                    lg:'row'
                },
                gap: {xs: '2px', md: '10px'},
                mt: '1rem'
            }}>
                <Container 
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem',
                    margin: '0',
                }}>
                    <Stack direction={'row'} spacing={2}
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                    }}>
                        <RiGraduationCapLine  className={darkMode ? 'text-gray-300':'text-orange-500'}/>
                        <Typography 
                        sx={{
                            fontSize: {
                                xs: '14px',
                                md: '16px'
                            },
                            marginLeft: '3px',
                            fontWeight: 700,
                        }}>Education</Typography>
                    </Stack>
                    <Container
                    sx={{
                        minWidth: {md: '240px', xs: '180px'},
                        maxWidth : {md: '300px', xs: '180px'},
                        height: {md: '125px', xs:'100px'},
                        borderRadius: '20px',
                        padding: '5px',
                        fontSize: {
                            xs: '11px',
                            md: '14px'
                        },
                        display: 'flex',
                        flexDirection: 'column',
                        paddingTop: '1rem',
                        paddingBottom: '1rem'  
                    }}
                    className={`${darkMode ? 'bg-black' : 'bg-[#FFE3BF]'}`}>
                    2024-2025 <br />
                    Software Development <br />
                    EarlyBell School
                    </Container>
                    <Container
                    sx={{
                        maminWidth: {md: '240px', xs: '180px'},
                        maxWidth : {md: '300px', xs: '180px'},
                        height: {md: '125px', xs:'100px'},
                        borderRadius: '20px',
                        padding: '5px',
                        fontSize: {
                            xs: '11px',
                            md: '14px'
                        },
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center', 
                        paddingTop: '1rem',
                        paddingBottom: '1rem'  
                    }}
                    className={`${darkMode ? 'bg-black' : 'bg-[#FFE3BF]'}`}>
                    2019-2024 <br /> 
                    Physics <br />
                    University of Ilorin
                    </Container>
                    
                </Container>
                <Container 
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem',
                    margin: '0',
                }}>
                    <Stack direction={'row'} spacing={2}
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                    }}>
                        <HiOutlineBriefcase  className={darkMode ? 'text-gray-300':'text-orange-500'}/>
                        <Typography 
                        sx={{
                            fontSize: {
                                xs: '14px',
                                md: '16px'
                            },
                            marginLeft: '3px',
                            fontWeight: 700,
                        }}>Experience</Typography>
                    </Stack>
                    <Container
                    sx={{
                        minWidth: {md: '240px', xs: '180px'},
                        maxWidth : {md: '300px', xs: '180px'},
                        height: {md: '125px', xs:'100px'},
                        borderRadius: '20px',
                        padding: '5px',
                        fontSize: {
                            xs: '11px',
                            md: '14px'
                        },
                        display: 'flex',
                        flexDirection: 'column',
                        paddingTop: '1rem',
                        paddingBottom: '1rem'  
                    }}
                    className={`${darkMode ? 'bg-black' : 'bg-[#FFE3BF]'}`}>
                    2025 - present <br/>
                    Frontend Developer <br />
                    Fiverr
                    </Container>
                    <Container
                    sx={{
                        minWidth: {md: '240px', xs: '180px'},
                        maxWidth : {md: '30px', xs: '180px'},
                        height: {md: '125px', xs:'100px'},
                        borderRadius: '20px',
                        padding: '5px',
                        fontSize: {
                            xs: '11px',
                            md: '14px'
                        },
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center', 
                        paddingTop: '1rem',
                        paddingBottom: '1rem',
                        flexWrap: 'wrap' 
                    }}
                    className={`${darkMode ? 'bg-black' : 'bg-[#FFE3BF]'}`}>
                    2025 - present <br /> 
                    Backend Developer <br />
                    Upwork
                    </Container>                 
                </Container>
            </Box>
                </Box>
            <Box
            sx={{
                mt: '1rem',
                pl: '15px',
                pr: '15px',
                pb: '10px',
                pt: '2px',
                borderBottomLeftRadius: {md: '20px', xs: '0'},
                borderBottomRightRadius: {md: '20px', xs: '0'},
            }}
            className={`${darkMode ? 'bg-gray-500':'bg-[#F8FBFB]' }`}>
            <Box
            sx={{
                mt: '5px',
                display: 'flex',
                gap: '10px',
            }}>
                <Container
                sx={{
                    margin: '0',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '5px',
                }}> 
                <Typography sx={{
                    fontSize: {
                        xs: '14px', md: '16px'
                    },
                    fontWeight: 700,
                    marginLeft: '3px',
                }}>Work Skills</Typography> 
                <Container 
                sx={{
                    display: 'flex',
                    gap: '3.5px',
                    fontSize: {
                        xs: '11px', md: '14px'},
                    flexWrap: 'wrap',
                    margin: '0',
                }}>
                    <span className= {`p-2 flex items-center rounded-[20px] ${darkMode ? 'bg-black' : 'bg-[#E1E8EF]' }`}>
                    NEXT.js
                    </span>
                    <span className= {`p-2 flex items-center rounded-[20px] ${darkMode ? 'bg-black' : 'bg-[#E1E8EF]' }`}>
                    React.js
                    </span>
                    <span className= {`p-2 flex items-center rounded-[20px] ${darkMode ? 'bg-black' : 'bg-[#E1E8EF]' }`}>
                    HTML 5
                    </span>
                    <span className= {`p-2 flex items-center rounded-[20px] ${darkMode ? 'bg-black' : 'bg-[#E1E8EF]' }`}>
                    CSS 3
                    </span>
                    <span className= {`p-2 flex items-center rounded-[20px] ${darkMode ? 'bg-black' : 'bg-[#E1E8EF]' }`}>
                    Tailwind CSS
                    </span>
                    <span className= {`p-2 flex items-center rounded-[20px] ${darkMode ? 'bg-black' : 'bg-[#E1E8EF]' }`}>
                    Figma
                    </span>
                    <span className= {`p-2 flex items-center rounded-[20px] ${darkMode ? 'bg-black' : 'bg-[#E1E8EF]' }`}>
                    JavaScript
                    </span>
                    <span className= {`p-2 flex items-center rounded-[20px] ${darkMode ? 'bg-black' : 'bg-[#E1E8EF]' }`}>
                    Mongo DB
                    </span>
                    <span className= {`p-2 flex items-center rounded-[20px] ${darkMode ? 'bg-black' : 'bg-[#E1E8EF]' }`}>
                    Git
                    </span>
                    <span className= {`p-2 flex items-center rounded-[20px] ${darkMode ? 'bg-black' : 'bg-[#E1E8EF]' }`}>
                    Rust
                    </span>
                    <span className= {`p-2 flex items-center rounded-[20px] ${darkMode ? 'bg-black' : 'bg-[#E1E8EF]' }`}>
                    Material UI
                    </span>
                </Container>     

                </Container>
                <Container
                sx={{
                    margin: '0',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '5px',
                }}>
                <Typography sx={{
                    fontSize: {
                        xs: '14px', md: '16px'
                    },
                    fontWeight: 700,
                    marginLeft: '3px',
                }}>Soft Skills</Typography>
                <Container 
                sx={{
                    display: 'flex',
                    gap: '3.5px',
                    fontSize: {
                        xs: '11px', md: '14px'},
                    flexWrap: 'wrap',
                    margin: '0',
                }}>
                    <span className= {`p-2 flex items-center rounded-[20px] ${darkMode ? 'bg-black' : 'bg-[#E1E8EF]' }`}>
                    Time Management 
                    </span>
                    <span className= {`p-2 flex items-center rounded-[20px] ${darkMode ? 'bg-black' : 'bg-[#E1E8EF]' }`}>
                    Mentorship 
                    </span>
                    <span className= {`p-2 flex items-center rounded-[20px] ${darkMode ? 'bg-black' : 'bg-[#E1E8EF]' }`}>
                    Collaboration
                    </span>
                    <span className= {`p-2 flex items-center rounded-[20px] ${darkMode ? 'bg-black' : 'bg-[#E1E8EF]' }`}>
                    Impeccable Communication
                    </span>
                    <span className= {`p-2 flex items-center rounded-[20px] ${darkMode ? 'bg-black' : 'bg-[#E1E8EF]' }`}>
                    Flexibility
                    </span>
                    <span className= {`p-2 flex items-center rounded-[20px] ${darkMode ? 'bg-black' : 'bg-[#E1E8EF]' }`}>
                    Research
                    </span>
                    <span className= {`p-2 flex items-center rounded-[20px] ${darkMode ? 'bg-black' : 'bg-[#E1E8EF]' }`}>
                    Writing
                    </span>
                    </Container>
                </Container>
            </Box>
            </Box>
            </Box>

            <Box>           
        </Box>
</Box>

  )
}

export default Main