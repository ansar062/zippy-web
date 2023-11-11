import Link from "next/link";

export default  function LoginPage() {
  


  return (
    <div  className="min-w-full min-h-screen bg-[#FFD700]" >
 
      <div className={`mx-auto  mt-[23%] md:mt-[5rem] md:ml-[26%] bg-white  ml-[2.5rem]  rounded-lg w-[90%] md:w-[100%] lg:w-[50%] md:h-[18rem] h-[12rem]  justify-center  `}>
        <h1 className='text-center pt-[5%] font-bold text-lg'>Forgot Password</h1>
        <hr className="border-red-500 border-width-1px height-2px mt-[3%] w-[70%] ml-[16%]" />

        <form className="ml-[15%] md:ml-[20%]">
          <input type="email" id="email" placeholder=" Email " className='border-2 border-rgba(0, 0, 0, 0.24) rounded-lg w-[80%] md:w-[60%] h-12 mt-[5%]' />
        
        </form>

        <button className=" mt-[4%] bg-[#EB002B] rounded-[25px] h-[35px] w-[70px] text-[#FFF] font-sans ml-[40%] md:ml-[45%] " >Reset</button>
       
        
        <div>
        <img src="images/bike.png" alt="" className='ml-[15%]  mt-[-15%] md:mt-[-23%]' />
        </div>
       
      </div>
    </div>
  );
}




