'use client'
import React, {useContext} from 'react'
import Link from 'next/link'
import { AiOutlineHome } from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";
import { TbBriefcase2 } from "react-icons/tb";
import { BiSolidContact } from "react-icons/bi";
import { GeneralContext } from './context';
import { VscCode } from "react-icons/vsc";
import { CiInstagram } from "react-icons/ci";
import { TbUxCircle } from "react-icons/tb";
import { MdOutlineCoPresent } from "react-icons/md";
import {Box, Typography, Stack, Container} from '@mui/material'


const Main = () => {
    const {darkMode} = useContext(GeneralContext)
  return (
    <Box
    sx={{display: 'flex',
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
        sx={{
            display: 'flex',
            marginTop: '15px',
        }}>
            <Typography 
            sx={{
                fontSize: {
                    xs: '18px',
                    md: '26px'
                },
                fontWeight: 'bold',
                
            }}>ABOUT ME </Typography >
            <Typography component={'span'} 
            sx={{
                fontSize: {
                    xs: '10px',
                    md: '15px'
                },
                fontWeight: 'bold',
                marginLeft: '5px',
            }}
            className={`${darkMode ? 'text-gray-300':'text-orange-500' }`}>
            ____________________________
            </Typography>
            </Container>
            <Typography
            sx={{
                fontSize: {
                    xs: '12px',
                    md: '15px'
                },
                fontWeight: 'normal',
                textAlign: 'justify',
                marginTop: '5px',
            }}
            className='mt-5 md:text-[14px] xs:text-[11px] font-normal'>
            Hello there! I&apos;m thrilled to welcome you to my portfolio. I am a passionate and versatile
            full-stack developer with a keen interest in exploring the latest cutting-edge technologies.
            My journey in the world of web development has been nothing short of exhilarating, and 
            I constantly strive to enhance my skills and embrace emerging trends in the industry.
            </Typography>
            <Typography 
            sx={{
                fontSize: {
                    xs: '15px',
                    md: '22px'
                },
                fontWeight: 'bold',
                marginTop: '20px',
                textAlign: 'justify',
            }}
            className='text-2xl font-bold mt-5'>
                What i do!
            </Typography>
            <Box
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-around',
                gap: '25px',
                marginTop: '10px',
            }}>
                <Container
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    maxWidth: {xs : '250px', md:'333px'},
                    minHeight: {xs: '180px'},
                    borderRadius: '20px',
                    padding: '5px',
                    margin: '0', 
                    fontSize: {
                        xs: '11px',
                        md: '14px'
                    },

                }}
                className={` ${darkMode ? 'bg-black': 'bg-orange-100'}`}>
                <Stack direction={'row'}
                sx={{
                    display: 'flex',
                    width: '100%',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    gap: '5px',
                    fontSize: {
                        xs: '13px',
                        md: '16px'
                    },
                    fontWeight: 'bold',
                }} >
                <VscCode className={darkMode? 'text-gray-300':'text-red-500'} />
                Web Development
                </Stack>
                As a developer, I find myself most 
                captivated by the power and flexibility of 
                NEXT.js. I&apos;m always eager to dive into new
                projects that leverage NEXT.js and 
                discover innovative ways to create fast, 
                scalable, and user-friendly applications.
                </Container>
                <Container
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    maxWidth: {xs : '250px', md:'333px'},
                    minHeight: {xs: '180px'},
                    borderRadius: '20px',
                    padding: '5px',
                    margin: '0', 
                    fontSize: {
                        xs: '11px',
                        md: '14px'
                    },

                }} className={` ${darkMode ? 'bg-black': 'bg-[#F2F5F9]'}`}>
                <Stack direction={'row'}
                sx={{
                    display: 'flex',
                    width: '100%',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    gap: '5px',
                    fontSize: {
                        xs: '13px',
                        md: '16px'
                    },
                    fontWeight: 'bold',
                }} >
                <CiInstagram className={darkMode ? 'text-gray-300':'text-orange-500'} />
                App Development
                </Stack>
                With a focus on user-centric design and
                cutting-edge technologies, I thrive on 
                building intuitive and efficient apps 
                that make a positive impact on people&apos;s 
                lives. Let&apos;s turn ideas into reality and 
                shape the future together.
                </Container>

                <Container
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    maxWidth: {xs : '250px', md:'333px'},
                    minHeight: {xs: '180px'},
                    borderRadius: '20px',
                    padding: '5px',
                    margin: '0', 
                    fontSize: {
                        xs: '11px',
                        md: '14px'
                    },

                }} className={` ${darkMode ? 'bg-black': 'bg-[#F2F5F9]'}`}>
                <Stack direction={'row'}
                sx={{
                    display: 'flex',
                    width: '100%',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    gap: '5px',
                    fontSize: {
                        xs: '13px',
                        md: '16px'
                    },
                    fontWeight: 'bold',
                }} >
                 <TbUxCircle  className={darkMode ? 'text-gray-300':'text-orange-500'}/>  
                UI/UX Designing
                </Stack>
                I have a deep appreciation for the art of
                Crafting visually appealing and intuitive user
                interfaces that offer a delightful user 
                experience is something I&apos;m truly fanatic 
                about.
                </Container>

                <Container
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    maxWidth: {xs : '250px', md:'333px'},
                    minHeight: {xs: '180px'},
                    borderRadius: '20px',
                    padding: '5px',
                    margin: '0', 
                    fontSize: {
                        xs: '11px',
                        md: '14px'
                    },

                }} className={` ${darkMode ? 'bg-black': 'bg-orange-100'}`}>
                <Stack direction={'row'}
                sx={{
                    display: 'flex',
                    width: '100%',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    gap: '5px',
                    fontSize: {
                        xs: '13px',
                        md: '16px'
                    },
                    fontWeight: 'bold',
                }} >
                <MdOutlineCoPresent className={darkMode ? 'text-gray-300':'text-red-500'}/>
                Mentorship
                </Stack>
                I have also found great joy in sharing my 
                knowledge with others. Being a technical 
                mentor allows me to give back to the 
                community that has supported me 
                throughout my career. 
                </Container>
            </Box>
    </Box>
</Box>
  )
}

export default Main