import Link from "next/link";

export default  function LoginPage() {
  


  return (
    <div  >
      <div className={`mx-auto  mt-[18%] md:mt-[8%] bg-white  rounded-lg w-[90%] md:w-[100%] lg:w-[50%] md:h-[70vh] h-[55vh]   `}>
        <h1 className='text-center pt-[5%] font-bold text-lg'>Login</h1>
        <hr className="border-red-500 border-width-1px height-2px mt-[3%] w-[70%] ml-[16%]" />

        <form className="ml-[15%] md:ml-[20%]">
          <input type="email" id="email" placeholder=" Email " className='border-2 border-rgba(0, 0, 0, 0.24) rounded-lg w-[80%] md:w-[60%] h-12 mt-[5%]' />
          <input type="password" id="password" placeholder=" Password " className='border-2 border-rgba(0, 0, 0, 0.24) rounded-lg w-[80%] md:w-[60%] h-12 mt-[3%] mb-3' /><br />
          <a href='https://www.google.com' className='text-[#EB002B] underline hover:underline-offset-4 ml-[35%] pt-[20%] md:ml-[40%]'>forgot Password?</a>
        </form>

        <button className=" mt-[4%] bg-[#EB002B] rounded-[25px] h-[35px] w-[70px] text-[#FFF] font-sans ml-[40%] md:ml-[45%] " >login</button>
        <h1 className='text-center pt-[2%]  mt-2 text-md text-gray-400'>Or login with</h1>
        <div className='flex-row justify-center mt-2'>
            <div className="flex pl-[45%]">
          <img className=" w-[20%] h-[20%] md:w-[10%] md:h-[10%] " src="images/googleLogo.png" alt="" />
          <img className="w-[20%] h-[20%] md:w-[9%] md:h-[9%] " src="images/appleLogo.png" alt="" />
          </div>
          <h1 className='text-center pt-[2%]   text-md text-gray-400'>if you don't have any account? <a className='text-[#EB002B] underline hover:underline-offset-4'><Link href='/Signup'>Signup</Link></a></h1>
        </div>
        
        <div>
        <img src="images/bike.png" alt="" className='ml-[15%]  mt-[-4%] md:mt-[-23%]' />
        </div>
       
      </div>
    </div>
  );
}




