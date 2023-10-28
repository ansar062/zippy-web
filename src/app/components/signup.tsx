import React from 'react'

function SignUpPage() {
  return (
    <div className='flex-row mx-auto  mt-[18%]  justify-center items-center rounded-lg w-[100%] lg:w-[50%] h-[90vh]   bg-white' >
      <h1 className='text-center pt-[13%] font-bold text-lg'>Sign Up</h1>
      <hr className="border-red-500 border-width-1px height-2px mt-[3%] w-[70%] ml-[16%]" />
      <div>
      <form >
        <input type="text" id="name" placeholder=" first name " className='border-2 border-rgba(0, 0, 0, 0.24) rounded-lg w-[40%] h-12 mt-[5%] mr-2 float-left ml-[9%]' />
        <input type="text" id="email" placeholder=" last name " className='border-2 border-rgba(0, 0, 0, 0.24) rounded-lg w-[40%] h-12 mt-[5%] float-left ml-[3%] ' />
        <input type="email" id="email" placeholder=" email " className='border-2 border-rgba(0, 0, 0, 0.24) rounded-lg w-[65%] h-12 mt-[3%] obsecure float-left ml-[9%]' /><br />
        <input type="pasword" id="pasword" placeholder=" password " className='border-2 border-rgba(0, 0, 0, 0.24) rounded-lg w-[65%] h-12 mt-[3%] obsecure float-left ml-[9%]' /><br />
        <input type="pasword" id="confirm_pasword" placeholder=" confirm password " className='border-2 border-rgba(0, 0, 0, 0.24) rounded-lg w-[65%] h-12 mt-[3%] obsecure float-left ml-[9%]' /><br />
        
       
      </form>
      </div>
      <div>
       <button className="  mt-[4%] bg-[#EB002B] rounded-[25px] h-[35px] w-[70px] text-[#FFF] font-sans " >SignUp</button>
       <h1 className='text-center pt-[6%]  mt-2 text-md text-gray-400 pr-8'>Or SignUp with</h1>
       <div className='flex justify-left mt-2 pr-8'>
        
      
         <img className="w-[7%] h-[7%] " src="images/googleLogo.png" alt="" />
        <img className="w-[6%] h-[6%] " src="images/appleLogo.png" alt="" />

      </div>
      </div>
      
    
      

      <img src="images/bike.png" alt="" className='' />


      
    </div>
  )
}

export default SignUpPage