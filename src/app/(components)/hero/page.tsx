"use client";
import React from "react";
import Burger from "../3Dburger";
import { motion, useTransform, useScroll } from "framer-motion";
import Link from "next/link";

const Hero = () => {
  return (
    <div className=" md:flex md:flex-row mt-[5rem] flex flex-col  bg-[#FFD700]    justify-evenly ">
      <div className="flex-col">
        <h1 className="text-left  text-[220%] font-primary  italic text-[#FFF] pl-[50%] md:pt-4 ">
          Finger Lick'in
        </h1>

        <div className=" pt-16 flex   text-left ">
          <h1 className="text-[200%] pl-5 lg:text-[270%] font-porter text-[#FFF]">
            Where <br></br> hunger<br></br>meets <br /> happiness<br></br> -
           
          </h1>
         
        </div>
        <button className="  bg-[#EB002B] rounded-[25px] h-[3rem] w-[8rem] text-[#FFF] font-primary " ><Link href='/'>View Menu</Link></button>
          <button className=" ml-[1rem] bg-white rounded-[25px] h-[3rem] w-[8rem] text-black font-primary " ><Link href='/'>Book a table</Link></button>
      </div>
      <div className="mt-[5%]">
        <motion.img
          animate={{ rotate: 360 }}
          transition={{ duration: 3 }}
          className=" hidden absolute md:block mt-[30%]  ml-[-2%] "
          src="images/leave.png"
          alt=""
        />
        <motion.img
          animate={{ rotate: 360 }}
          transition={{ duration: 3 }}
          className=" hidden absolute md:block  right-[48%] top-[40%] "
          src="images/tomatoslice.png"
          alt=""
        />
        <motion.img
          animate={{ rotate: 360 }}
          transition={{ duration: 3 }}
          className="hidden absolute md:block  right-[42%]  "
          src="images/leave.png"
          alt=""
        />
      </div>

    
      
      <div className="mt-[3%] shrink-none flex-col md:pt-5 items-end md:pl-20">
        <motion.img
          animate={{ y: -30 }}
          transition={{ duration: 3 }}
          className="   md:mt-[15%] sm:mt-[5%]  "
          src="images/bun.png"
          alt=""
        />
        <motion.img
          animate={{ y: -30 }}
          transition={{ duration: 3 }}
          className="md:mb-[-12%] mb-[-10%]  md:mt-[-7%] sm:mt-[-3%] mt-[-6%]"
          src="images/cheese.png"
          alt=""
        />
        <motion.img className=" md:mt-[2%] sm:mt-[4%] mt-[2%]" src="images/kbab.png" alt="" />
        <motion.button animate={{opacity:1}} transition={{delay:2, duration:1}} initial={{opacity:0}}className="mt-2 ml-7 bg-[#EB002B] w-[23rem] h-[5rem] rounded-[25px] text-[#FFF] font-sans " >Order now</motion.button>
        <motion.img
          animate={{ y: 80 }}
          transition={{ duration: 3 }}
          className=" md:mt-[-19%] sm:mt-[-12%] mt-[-19%]"
          src="images/cheesebelow.png"
          alt=""
        />
        <motion.img
          animate={{ y: 70 }}
          transition={{ duration: 3 }}
          className=" md:mt-[-6%] sm:mt-[-2%] mt-[-6%] ml-[-10%] "
          src="images/tomato.png"
          alt=""
        />
        <motion.img
          animate={{ y: 90 }}
          transition={{ duration: 3 }}
          className=" md:mt-[-12%] sm:mt-[-10%] mt-[-12%]"
          src="images/salad.png"
          alt=""
        />
        <motion.img
          animate={{ y: 90 }}
          transition={{ duration: 3 }}
          className=" md:mt-[-4%] sm:mt-[-2%] mt-[-4%] ml-[6%] w-[360px] md:w-[360px]"
          src="images/belowbun.png"
          alt=""
        />
      </div>

      <div className="mt-[5%]">
        {" "}
        <motion.img
          animate={{ rotate: 360 }}
          transition={{ duration: 3 }}
          className="absolute hidden  md:block right-[8%] "
          src="images/leave.png"
          alt=""
        />
        <motion.img
          animate={{ rotate: 360 }}
          transition={{ duration: 3 }}
          className=" absolute hidden md:block right-[-6%] top-[50%] "
          src="images/tomatoslice.png"
          alt=""
        />
        <motion.img
          animate={{ rotate: 360 }}
          transition={{ duration: 3 }}
          className="absolute hidden md:block  right-[4%] top-[70%] "
          src="images/leave.png"
          alt=""
        />
      </div>
    </div>
 
  );
};

export default Hero;
