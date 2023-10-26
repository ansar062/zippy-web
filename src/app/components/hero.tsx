import React from 'react'

const Hero = () => {
  return (
    <div className=' lg:flex    content-evenly  ' >


      <div className='flex-col '>

        <h1 className="text-left  text-[200%] font-primary  italic text-[#FFF] pl-[50%] md:pt-8 ">Finger Lick'in</h1>


        <div className=' pt-24 flex   text-left '>
          <h1 className="text-[200%] lg:text-[300%] font-porter text-[#FFF]">Where <br></br> hunger<br></br>meets <br /> happiness<br></br> - your<br></br> go-to <br /> fast food <br /> destination</h1>
        </div>

      </div>

      <div className='flex'>
        <div className=' shrink-none flex-col md:pt-60 items-end md:pl-20'  >


       
          <img className="     " src="images/bun.png" alt="" />
          <img className="  mt-[-10%]  " src="images/cheese.png" alt="" />
          <img className=" mt-[-8%] " src="images/kbab.png" alt="" />
          <img className=" mt-[-5%]  " src="images/tomato.png" alt="" />
          <img className=" mt-[-7%] " src="images/salad.png" alt="" />
          <img className=" mt-[-8%] " src="images/belowbun.png" alt="" />



        </div>

        <div className='flex-col items-end md:pt-40'>
          <img className="    " src="images/tomatoslice.png" alt="" />
          <img className="     " src="images/leave.png" alt="" />
          <img className="     " src="images/tomatoslice.png" alt="" />


        </div>
      </div>

    </div>
  )
}

export default Hero