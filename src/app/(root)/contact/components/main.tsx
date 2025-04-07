"use client";
import React, { useContext, useState } from "react";
import Link from "next/link";
import { AiOutlineHome } from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";
import { TbBriefcase2 } from "react-icons/tb";
import { BiSolidContact } from "react-icons/bi";
import { GeneralContext } from "@/app/components/context";
import { FiPhoneCall } from "react-icons/fi";
import { TfiEmail } from "react-icons/tfi";
import { Box, Container, Typography,  Button, Input } from "@mui/material";

const Main = () => {
  const { darkMode } = useContext(GeneralContext);
  const [name, setName] = useState<string>("");
  const [nameError, setNameError] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");
  const [regexError, setRegexError] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [messageError, setMessageError] = useState<string>("");

  const handleSubmit = () => {
    if (name === "") {
      setNameError("Name is required!");
    } else {
      setNameError("");
    }

    if (email === "") {
      setEmailError("Email is required!");
    } else {
      setEmailError("");
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setRegexError("Invalid email format!");
    } else {
      setRegexError("");
    }

    if (message === "") {
      setMessageError("Message is required!");
    } else {
      setMessageError("");
    }
    return;
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minWidth: {
          xs: "100vw",
          md: "100%",
        },
        marginTop: {
          xs: "1.8rem",
          md: "0",
        },
      }}
    >
      <Box
        sx={{
          display: {
            xs: "none",
            md: "flex",
          },
          justifyContent: "space-evenly",
          width: "503px",
          height: "95px",
          border: "1px solid gray",
          borderRadius: "20px",
          alignSelf: "end",
          alignItems: "center",
          padding: "5px",
          marginBottom: "2px",
        }}
      >
        <Link href="/">
          <button
            className={`p-3 cursor-pointer w-[60px] h-[60px] text-center flex flex-col xs:text-[10px] lg:text-[13px]  items-center rounded-[10px] gap-1 ${
              darkMode
                ? "bg-gray-500 hover:bg-gray-400 "
                : " bg-[#EBF2FA] hover:bg-orange-500"
            }`}
          >
            <AiOutlineHome />
            Home
          </button>
        </Link>
        <Link href="/resume">
          <button
            className={`p-3 cursor-pointer w-[60px] h-[60px] text-center flex flex-col items-center rounded-[10px] xs:text-[10px] lg:text-[13px] gap-1 ${
              darkMode
                ? "bg-gray-500 hover:bg-gray-400 "
                : " bg-[#EBF2FA] hover:bg-orange-500"
            }`}
          >
            <CgFileDocument />
            Resume
          </button>
        </Link>
        <Link href="/work">
          <button
            className={`p-3 cursor-pointer w-[60px] h-[60px] text-center flex flex-col items-center rounded-[10px] xs:text-[10px] lg:text-[13px] gap-1 ${
              darkMode
                ? "bg-gray-500 hover:bg-gray-400 "
                : " bg-[#EBF2FA] hover:bg-orange-500"
            }`}
          >
            <TbBriefcase2 />
            Work
          </button>
        </Link>
        <Link href="/contact">
          <button
            className={`p-3 cursor-pointer w-[60px] h-[60px] text-center flex flex-col items-center rounded-[10px] xs:text-[10px] lg:text-[13px] gap-1 ${
              darkMode
                ? "bg-gray-500 hover:bg-gray-400 "
                : " bg-[#EBF2FA] hover:bg-orange-500"
            }`}
          >
            <BiSolidContact />
            Contact
          </button>
        </Link>
      </Box>
      <Box
        sx={{
            minHeight: "660px",
            maxWidth: {
              xs: "100%",
              md: "100%",
            },
          marginTop: "20px",
          marginBottom: "5px",
          borderRadius: { md: "20px", xs: "0px" },
          paddingLeft: {
            xs: "5px",
            md: "71px",
          },
          paddingRight: {
            xs: "5px",
            md: "71px",
          },
          paddingTop: "5px",
          paddingBottom: "5px",
          display: "flex",
          flexDirection: "column",
          alignItems: {
            xs: "center",
          },
        }}
        className={` ${darkMode ? "bg-gray-700" : "bg-[#FFFFFF]"}`}
      >
        <Container
          sx={{
            display: "flex",
            marginTop: "15px",
          }}
        >
          <Typography
            sx={{
              fontSize: {
                xs: "18px",
                md: "26px",
              },
              fontWeight: "bold",
            }}
          >
            Contact{" "}
          </Typography>
          <Typography
            component={"span"}
            sx={{
              fontSize: {
                xs: "10px",
                md: "15px",
              },
              fontWeight: "bold",
              marginLeft: "5px",
            }}
            className={`${darkMode ? "text-gray-300" : "text-orange-500"}`}
          >
            ____________________________
          </Typography>
        </Container>

        <Box
          sx={{
            display: "flex",
            flexDirection: {
                xs: "column",
                lg:'row',
            },
            gap: "5px",
            mt: "10px",
          }}
        >
          <Container
            sx={{
              minWidth: {
                xs: '200px',
                md: '300px'
              },
              maxWidth: {
                xs: '250px',
                md: '350px'
              },
              minHeight: {md: "150px", xs: '90px'},
              borderRadius: "20px",
              padding: "5px",
                display: "flex",
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
            }}
            className={`${darkMode ? "bg-black" : "bg-[#FFEED9]"}`}
          >
           <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                gap: '3px',
                fontWeight: 'bold',
                marginBottom: '2px',
                justifyContent: 'flex-start',
                fontSize: {
                    xs: '13px',
                    md: '16px'
                },
            }}>
              <FiPhoneCall
                className={darkMode ? "text-gray-300" : "text-red-500"}
              />
              Phone:
            </Box>
            <Typography
            sx={{
                ml: '6px',
                flexWrap: 'wrap',
                fontSize: {
                    xs: '10px',
                    md: '15px'
                },
            }}
            className="ml-6 ">
              +2349058696816 <br />
              +2349070680717
            </Typography>
          </Container>
          <Container
            sx={{
              minWidth: {
                xs: '200px',
                md: '300px'
              },
              maxWidth: {
                xs: '250px',
                md: '350px'
              },
              minHeight: {md: "150px", xs: '90px'},
              borderRadius: "20px",
              padding: "5px",
                display: "flex",
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
            }}
            className={`${darkMode ? "bg-black" : "bg-[#F2F7FC]"}`}
          >
            <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                gap: '3px',
                fontWeight: 'bold',
                marginBottom: '2px',
                justifyContent: 'flex-start',
                fontSize: {
                    xs: '13px',
                    md: '16px'
                },
            }}>
              <TfiEmail
                className={darkMode ? "text-gray-300" : "text-red-500"} 
              />
              Email:
            </Box>
            <Typography
            sx={{
                ml: '6px',
                flexWrap: 'wrap',
                fontSize: {
                    xs: '10px',
                    md: '15px'
                },
            }}
            className="ml-6 ">adeleyesheriff464@gmail.com</Typography>
          </Container>
        </Box>

        <Box
        sx={{
            maxWidth: {
                xs: '100%',
                md: '100%'
            },
            minHeight: '392px',
            borderRadius: '20px',
            padding: '12px',
            margin: '10px',
           
        }}
          className={`${darkMode ? "bg-black" : "bg-[#F8FBFB]"} `}>
          <Typography
          sx={{
            fontSize: {
              xs: "11px",
              md: "15px",
            },
            flexWrap: "wrap",
          }}
          >
            I am always open to discussing{" "}
            <span className="font-bold">
              new projects, opportunities in tech world, partnerships
            </span>{" "}
            and more so <span className="font-bold">mentorship.</span>
          </Typography>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
          >
            <Container
            sx={{
                margin: '0',
                marginY: '7px',
                display: 'flex',
                gap: '5px',
            }}>
              <Typography 
              sx={{
                fontSize: {
                  xs: "11px",
                  md: "15px",
                },
                fontWeight: "bold",
              }}
              >Name:</Typography>
              <Input
                type="name"
                value={name}
                onChange={(e) => {
                  setName((e.target as HTMLInputElement).value);
                }}
                sx={{
                    fontSize: {
                        xs: "11px",
                        md: "15px",
                    },
                    maxWidth: {
                        xs: '300px',
                        md: '550px'
                    },
                    outline: 'none',
                    border: 'none',
                
                }}
              />
            </Container>
            <hr className="text-gray-300" />
            {nameError && (
              <Typography
               sx={{
                color: 'red',
                fontSize: {
                  xs: "9px",
                  md: "12px",
                },
               }}role="alert">
                {nameError}
              </Typography>

            )}
            
            <Container
            sx={{
                margin: '0',
                marginY: '7px',
                display: 'flex',
                gap: '5px',
            }}>
              <Typography
              sx={{
                fontSize: {
                  xs: "11px",
                  md: "15px",
                },
                fontWeight: "bold",
              }}>Email:</Typography>
              <Input
                type="name"
                value={email}
                onChange={(e) => {
                  setEmail((e.target as HTMLInputElement).value);
                }}
                sx={{
                    fontSize: {
                        xs: "11px",
                        md: "15px",
                    },
                    maxWidth: {
                        xs: '300px',
                        md: '550px'
                    },
                    outline: 'none',
                    border: 'none',
                
                }}
              />
            </Container>
            <hr className="text-gray-300" />
            {emailError && (
              <Typography
              sx={{
                fontSize: {
                  xs: "9px",
                  md: "12px",
                },
                color: 'red'
              }} 
              role="alert">
                {emailError}
              </Typography>
            )}
            {regexError && (
              <Typography
              sx={{
                fontSize: {
                  xs: "9px",
                  md: "12px",
                },
                color: 'red'
              }}
              role="alert">
                {regexError}
              </Typography>
            )}
            <Container
            sx={{
                margin: '0',
                marginY: '7px',
                display: 'flex',
                gap: '5px',
            }}>
              <Typography
              sx={{
                fontSize: {
                  xs: "11px",
                  md: "15px",
                },
                fontWeight: "bold",
              }}>Message:</Typography>
              <Input
                type="name"
                value={message}
                onChange={(e) => {
                  setMessage((e.target as HTMLInputElement).value);
                }}
                sx={{
                    fontSize: {
                        xs: "11px",
                        md: "15px",
                    },
                    maxWidth: {
                        xs: '300px',
                        md: '550px'
                    },
                    outline: 'none',
                    border: 'none',
                
                }}
              />
            </Container>
            <hr className="text-gray-300" />
            {messageError && (
              <Typography
              sx={{
                fontSize: {
                  xs: "9px",
                  md: "12px",
                },
                color: 'red'
              }}
               role="alert">
                {messageError}
              </Typography>
            )}

            <Button
              type="submit"
              variant="contained"
              sx={{
                padding: '5px',
                paddingY: {md:'10px', xs: '3px'},
                cursor: 'pointer',
                border: '1px solid gray',
                borderRadius: '20px',
                marginTop: '20px',
                width: {
                    xs: '100px',
                    md: '200px'
                },
              }}
              className={`${
                darkMode ? "border-gray-300" : "border-orange-500"
              }`}
            >
              Submit
            </Button>
          </form>
        </Box>
      </Box>
    </Box>
  );
};

export default Main;
