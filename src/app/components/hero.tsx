"use client"; 
import React from 'react'
import Burger from './3Dburger'
import { motion, useTransform, useScroll } from "framer-motion"

const Hero = () => {
  return (
    <div className=' lg:flex    justify-evenly ' >


      <div className='flex-col'>

        <h1 className="text-left  text-[220%] font-primary  italic text-[#FFF] pl-[50%] md:pt-4 ">Finger Lick'in</h1>


        <div className=' pt-16 flex   text-left '>
          <h1 className="text-[200%] pl-5 lg:text-[270%] font-porter text-[#FFF]">Where <br></br> hunger<br></br>meets <br /> happiness<br></br> - your<br></br> go-to <br /> fast food <br /> destination</h1>
        </div>

      </div>
   <div>
      
   
          <motion.img animate={{rotate: 360}} transition={{duration:3}} className=" hidden absolute md:block mt-[30%]  ml-[-2%] " src="images/leave.png" alt="" />
          <motion.img animate={{rotate: 360}} transition={{duration:3}} className=" hidden absolute md:block  right-[48%] top-[40%] " src="images/tomatoslice.png" alt="" /> 
          <motion.img animate={{rotate: 360}} transition={{duration:3}} className="hidden absolute md:block  right-[42%]  " src="images/leave.png" alt="" />

   </div>

    
        <div className=' shrink-none flex-col md:pt-5 items-end md:pl-20'  >

          
          <motion.img animate={{y:-30}} transition={{duration:3}} className="   mt-[15%]  " src="images/bun.png" alt="" />
          <motion.img animate={{y:-30}} transition={{duration:3}}  className="mb-[-12%] mt-[-7%]" src="images/cheese.png" alt="" />
          <motion.img    className=" mt-[2%] " src="images/kbab.png" alt="" />
          <motion.button animate={{opacity:1}} initial={{opacity:0}} transition={{duration:1, delay:2}} className="  bg-[#EB002B] rounded-[40px] w-[80%] h-[75px] md:h-[4vw] md:w-[24vw] text-[#FFF] mt-1 font-primary text-[20px] ml-10 " >Order now</motion.button>
          <motion.img animate={{y:80,}} transition={{duration:3}}  className=" mt-[-19%]  " src="images/cheesebelow.png" alt="" />
          <motion.img animate={{y:70}} transition={{duration:3}}  className=" mt-[-6%] ml-[-10%] " src="images/tomato.png" alt="" />
          <motion.img  animate={{y:90}} transition={{duration:3}}  className=" mt-[-12%] " src="images/salad.png" alt="" />
          <motion.img animate={{y:90}} transition={{duration:3}}  className=" mt-[-4%] ml-[6%] w-[360px] md:w-[360px]" src="images/belowbun.png" alt="" /> 

        



     
      </div>
      
      <div>  <motion.img  animate={{rotate: 360}} transition={{duration:3}} className="absolute hidden  md:block right-[8%] " src="images/leave.png" alt="" />
      <motion.img animate={{rotate: 360, scale:.7}} transition={{duration:3}}  initial={{scale:.3}} className=" absolute    md:block right-[-12%] top-[20%] " src="images/tomatoslice.png" alt="" /> 
      <motion.img animate={{rotate: 360, scale:.7}} transition={{duration:3}}  initial={{scale:.3}} className=" absolute  md:hidden  right-[-14%] top-[30%] " src="images/leave.png" alt="" /> 
      <motion.img animate={{rotate: 360}} transition={{duration:3}} className=" absolute hidden md:block right-[-6%] top-[50%] " src="images/tomatoslice.png" alt="" />
      <motion.img animate={{rotate: 360}} transition={{duration:3}} className="absolute hidden md:block  right-[4%] top-[70%] " src="images/leave.png" alt="" />
      </div>
      

    </div>
  )
}

export default Hero