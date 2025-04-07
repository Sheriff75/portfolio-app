'use client'
import {useState, useContext} from 'react'
import {AppBar, Avatar, Box, CssBaseline,  Divider, Drawer, IconButton, Stack, Toolbar, Typography} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Image from 'next/image';
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import Link from 'next/link'
import { AiOutlineHome } from 'react-icons/ai'
import { CgFileDocument } from 'react-icons/cg'
import { TbBriefcase2 } from 'react-icons/tb'
import { BiSolidContact } from 'react-icons/bi'
import { GeneralContext } from './context';
import { FiMoon } from 'react-icons/fi'
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialLinkedin } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";
import { IoLogoGithub } from "react-icons/io5";
import { MdOutlinePhoneIphone } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";


const drawerWidth = 240;
const width = 270;

interface Props {
  window?: () => Window;
}

export default function MobileSidebar(item: Props) {
  const { window} = item;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [isRight, setIsRight] = useState(false)

  const {darkMode, setDarkMode} = useContext(GeneralContext)

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const handleDrawerRight = () => {
    if (!isClosing) {
      setIsRight(!isRight);
    }
  }
  const handleRightClose = () => {
    setIsClosing(true);
    setIsRight(false);
  };

  
   const drawerLeft = (
     <Box 
            sx={{
              display: {
                xs: 'flex',
                md: 'none'
              },
              flexDirection: 'column',
              height: '100vh',
              backgroundColor: darkMode ? '#1E1E1E' : 'white)',
              gap: '1rem',
              padding: '1rem',
              paddingTop: '2rem',
            }} >
            <>
                <Typography variant='body1' sx={{
                  fontWeight: 'bold',
                  color: darkMode ? 'white' : 'black',
                }}>
                  Portfolio
                </Typography>
                <Divider />
                <Link href='/'>
                <Stack direction={'row'} 
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  color: darkMode ? 'white' : 'black',
                  ':hover': {
                    backgroundColor: darkMode ? 'gray' : 'lightgray',
                  },
                  padding: '0.5rem',
                  borderRadius: '10px',
                  marginTop: '1.5rem',
                }}>
                  <Avatar>
                  <AiOutlineHome /> 
                  </Avatar>

                <Typography variant='body2'>
                    Home
                </Typography>
                  </Stack>
                </Link>
                
                <Divider />
                <Link href='/resume'>
                <Stack direction={'row'} 
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  color: darkMode ? 'white' : 'black',
                  ':hover': {
                    backgroundColor: darkMode ? 'gray' : 'lightgray',
                  },
                  padding: '0.5rem',
                  borderRadius: '10px',
                }}>
                  <Avatar>
                  <CgFileDocument /> 
                  </Avatar>

                <Typography variant='body2'>
                    Resume
                </Typography>
                  </Stack>
                </Link>

                <Divider />
                <Link href='/work'>
                <Stack direction={'row'} 
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  color: darkMode ? 'white' : 'black',
                  ':hover': {
                    backgroundColor: darkMode ? 'gray' : 'lightgray',
                  },
                  padding: '0.5rem',
                  borderRadius: '10px',
                }}>
                  <Avatar>
                  <TbBriefcase2 />
                  </Avatar>

                <Typography variant='body2'>
                    Work
                </Typography>
                  </Stack>
                </Link>

                <Divider />
                <Link href='/contact'>
                <Stack direction={'row'} 
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  color: darkMode ? 'white' : 'black',
                  ':hover': {
                    backgroundColor: darkMode ? 'gray' : 'lightgray',
                  },
                  padding: '0.5rem',
                  borderRadius: '10px',
                }}>
                  <Avatar>
                  <BiSolidContact /> 
                  </Avatar>

                <Typography variant='body2'>
                    Contact
                </Typography>
                  </Stack>
                </Link>
            </>
            </Box >
  );

  const profile: string = '/profile.jpg'

 const drawerRight = (
    <Box 
    sx={{
      display: {
        xs: 'flex',
        md: 'none'
      },
      flexDirection: 'column',
      height: '100vh',
      backgroundColor: darkMode ? '#1E1E1E' : 'white)',
      width: width,
      gap: '1rem',
      justifyContent: 'center',
      textAlign: 'center',
      alignItems: 'center',
      color: darkMode ? 'white' : 'black',
    }}>
      <Box sx = {{
        maxWidth: '100px',
        maxHeight: '100px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '2rem',
        zIndex: 1,
        borderRadius: '20px',
      }}>
        <Image src={profile} alt='profile' width={80} height={80} className='rounded-[20px] z-[1]' />
      </Box>
        <div className='text-xl font-bold '>
          Jane Adeleye
          </div>
          <div className='text-sm font-normal text-center mt-[-0.8rem]'>
          Frontend Developer
          </div>
          <div className='flex max-w-[296px] max-h-[61.66px] gap-[9.1px] mt-4'>
            <button className={`p-3 rounded-[10px]  ${darkMode ? 'bg-black':'bg-[#F2F5F9]' }`}>
              <TiSocialFacebook />
            </button>
            <button className={`p-3 rounded-[10px]  ${darkMode ? 'bg-black':'bg-[#F2F5F9]' }`}>
              <TiSocialLinkedin />
            </button>
            <button className={`p-3 rounded-[10px]  ${darkMode ? 'bg-black':'bg-[#F2F5F9]' }`}>
              <TiSocialTwitter />
            </button>
            <button className={`p-3 rounded-[10px]  ${darkMode ? 'bg-black':'bg-[#F2F5F9]' }`}>
              <IoLogoGithub />
            </button>
          </div>

          <Box
          sx={{
            maxWidth: '300px',
            maxHeight: '400px',
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            borderRadius: '20px',
            padding: '5px',
            backgroundColor: darkMode ? 'gray.700' : '#F2F5F9'
          }}>
              <div className='flex items-center p-3 pb-6 gap-5'>
                <MdOutlinePhoneIphone />
                <span className='text-[13px] text-left'>
                Phone <br/>
                <button>+2349058696816</button>  
                </span>
              </div>
              <hr className='text-gray-300' />
              <div className='flex items-center p-3 pb-6 gap-5'>
                <MdOutlineEmail />
                <span className='text-[13px] text-left'>
                Email <br/>
                <button>adeleyesheriff464@gmail.com</button>  
                </span>
              </div>
              <hr className='text-gray-300'/>
              <div className='flex items-center p-3 pb-6 gap-5'>
                <CiLocationOn />
                <span className='text-[13px] text-left'>
                Location <br />
                <button>lagos, Nigeria</button>  
                </span>
              </div>
          </Box>
      
      </Box>
  )

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{
       display: { xs: 'flex', md: 'none' }, 
       }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { md: `calc(100% - ${drawerWidth}px)` },
          ml: { md: `${drawerWidth}px` },
          display: { md: 'none' },
          backgroundColor: darkMode ? '#1E1E1E' : 'rgb(106, 57, 197)', 
  }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Stack direction = 'row'
          sx={{
            alignItems: 'center',
            gap:'2rem'
          }}>
            
            <Typography sx={{
                fontSize: {
                    xs: '1rem', lg: '1.5rem'
                },
                fontWeight: 'semi-bold'
            }}>
                Portfolio
            </Typography>
            <div className= {`cursor-pointer p-4 border rounded-full ${darkMode ? 'bg-black text-white' : 'bg-[#EBF2FA] border-gray-400'}`} onClick={() => { setDarkMode(!darkMode); console.log(darkMode) }}>
              <FiMoon />
              </div>
          </Stack>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerRight}
            sx={{ 
              display: { md: 'none', sm: 'flex' },
              width: {sm: '100%', xs: '50%'},
              alignItems: 'flex-end'
            }}
          >
            <ChevronRightIcon />
          </IconButton>

        </Toolbar>
      </AppBar>

      <Box
        component="nav"
        sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}
        aria-label="folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          slotProps={{
            root: {
              keepMounted: true,
            },
          }}
        >
          {drawerLeft}
        </Drawer>
  

        <Drawer
          container={container}
          variant="temporary"
          open={isRight}
          anchor = 'right'
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleRightClose}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': { 
              boxSizing: 'border-box',
              width: width,
              scrollbarWidth: 'none',
              msOverflowStyle: 'none'
             },
            '& .MuiDrawer-paper::-webkit-scrollbar': {
              display: 'none',
          },
         
          }}
          slotProps={{
            root: {
              keepMounted: true,
            },
          }}
        >
          {drawerRight}
        </Drawer>
      </Box>
    </Box>
  );
}
