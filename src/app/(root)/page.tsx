"use client";
import React, { useContext } from "react";
import Sidebar from '../components/sidebar'
import Header from "../components/header";
import Main from "../components/main";
import { GeneralContext } from "../components/context";
import { Box } from "@mui/material";

export default function Home() {
  const { darkMode } = useContext(GeneralContext);
  const dark = "bg-black text-white";
  const light = "bg-[#F2F5F9]";
  return (
    <Box
      sx={{
        "& .MuiBox-root": {
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        },
        "& .MuiBox-root::-webkit-scrollbar": {
          display: "none",
        },
        height: "100vh",
        overflow: "auto",
        paddingLeft:{md :"100px", xs: '0px'},
        paddingRight: {md :"100px", xs: '0px'},
        paddingTop: {md :"18px", xs: '7px'},
        display: "flex",
        flexDirection: "column",
      }}
      className={` ${darkMode ? dark : light} `}
    >
      <Header />
      <Box sx={{
        display: 'flex',
        gap: '20px'
      }} >
        <Box 
        sx={{
          display: {
            xs: 'none',
            md: 'block'
          }
        }}>
          <Sidebar />
        </Box>
        <Box>
          <Main />
        </Box>
      </Box>
    </Box>
  );
}
