

export default  function SignupPage() {
  


  return (
    <div className="min-w-screen min-h-screen bg-[#FFD700]"  >
      <div className={`mx-auto  mt-[20%] md:mt-[8%] bg-white  ml-[2.5rem] md:ml-[26%] rounded-lg w-[90%] md:w-[100%] lg:w-[50%] md:h-[70vh] h-[30rem]   `}>
        <h1 className='text-center pt-[5%] font-bold text-lg'>SignUp</h1>
        <hr className="border-red-500 border-width-1px height-2px mt-[3%] w-[70%] ml-[16%]" />

        <form className="ml-[15%] md:ml-[20%]">
          <input type="name" id="fname" placeholder=" First Name" className='border-2 border-rgba(0, 0, 0, 0.24) rounded-lg w-[80%] md:w-[40%] h-12 mt-[5%]' />
          <input type="name" id="lname" placeholder=" Second Name" className='border-2 border-rgba(0, 0, 0, 0.24) rounded-lg w-[80%] md:w-[40%] h-12 mt-[3%] md:ml-3' />
          <input type="email" id="email" placeholder=" Email " className='border-2 border-rgba(0, 0, 0, 0.24) rounded-lg w-[80%] md:w-[60%] h-12 mt-[3%]' />
          <input type="password" id="password" placeholder=" Password " className='border-2 border-rgba(0, 0, 0, 0.24) rounded-lg w-[80%] md:w-[60%] h-12 mt-[3%] ' />
          <input type="password" id="cpassword" placeholder=" Confirm Password" className='border-2 border-rgba(0, 0, 0, 0.24) rounded-lg w-[80%] md:w-[60%] h-12 mt-[3%]' />
         
          
        </form>

        <button className=" mt-[2%] bg-[#EB002B] rounded-[25px] h-[35px] w-[70px] text-[#FFF] font-sans ml-[40%] md:ml-[45%] " >SignUp</button>
        <h1 className='text-center pt-[2%]  mt-2 text-md text-gray-400'>Or SignUp with</h1>
        <div className='flex-row justify-center mt-2'>
            <div className="flex pl-[45%]">
          <img className=" w-[20%] h-[20%] md:w-[10%] md:h-[10%] " src="images/googleLogo.png" alt="" />
          <img className="w-[20%] h-[20%] md:w-[9%] md:h-[9%] " src="images/appleLogo.png" alt="" />
          </div>
         
        </div>
        
        <div>
        <img src="images/bike.png" alt="" className='ml-[15%]  mt-[-4%] md:mt-[-23%]' />
        </div>
       
      </div>
    </div>
  );
}




