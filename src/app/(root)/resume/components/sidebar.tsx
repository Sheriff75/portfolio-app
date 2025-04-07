import React, {useContext} from 'react'
import Image from 'next/image'
import {GeneralContext} from '@/app/components/context';
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialLinkedin } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";
import { IoLogoGithub } from "react-icons/io5";
import { MdOutlinePhoneIphone } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
const Sidebar = () => {
  const{darkMode} = useContext(GeneralContext)
  const profile: string = '/profile.jpg'
  return (
    <div className='hidden w-[400px] h-[800px]  lg:flex flex-col justify-center align-center items-center flex-shrink-1'>
      <Image src={profile} alt='profile' width={120} height={120} className='rounded-[20px] z-[1]' />
    <div className={`w-[400px] h-[645px] rounded-[20px] mt-[-4.5rem] flex flex-col items-center p-5  ${darkMode ? 'bg-gray-700':'bg-[#FFFFFF]' }`}>
      <div className='h-[4.9rem]'></div>
      <div className='max-w-[235px] max-h-[36px] text-2xl font-bold '>
        Jane Adeleye
        </div>
        <div className='w-[153px] max-h-[40px] text-sm font-normal text-center mt-1'>
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
        <div className= {`mt-4 w-[350px] h-[350px] rounded-[20px] p-5 ${darkMode ? 'bg-gray-500':'bg-[#F2F5F9]' }`}>
            <div className='flex align center items-center p-3 pb-6 gap-5'>
              <MdOutlinePhoneIphone />
              <span className='text-[13px]'>
              Phone <br/>
              <button>+2349058696816</button>  
              </span>
            </div>
            <hr className='text-gray-300' />
            <div className='flex align center items-center p-3 pb-6 gap-5'>
              <MdOutlineEmail />
              <span className='text-[13px]'>
              Email <br/>
              <button>adeleyesheriff464@gmail.com</button>  
              </span>
            </div>
            <hr className='text-gray-300'/>
            <div className='flex align center items-center p-3 pb-6 gap-5'>
              <CiLocationOn />
              <span className='text-[13px]'>
              Location <br />
              <button>lagos, Nigeria</button>  
              </span>
            </div>
            <hr  className='text-gray-300'/>
        </div>
    </div>
    </div>
  )
}

export default Sidebar