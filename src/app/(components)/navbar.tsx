import Link from "next/link";

const Navbar = () => {
  return (


   <div className=" backdrop-blur-sm bg-white/80 fixed top-0 w-full shadow-md">
    <nav className="md:pt-3 md:pl-10  lg:ml-[-4%] flex  justify-between sticky items-center   ">
      <div className='pt-2 pr-[20%]  flex'>
        <div className="absolute  md:hidden ml-4 mt-3 ">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none" >
            <path d="M3.75 8.75H26.25M3.75 15H26.25M3.75 21.25H26.25" stroke="black" stroke-width="1.5" stroke-linecap="round" />
          </svg></div>
        <img className=" w-[63px] h-[57px] mt-[-8px] md:ml-3 " src="logo.png" alt="" />
        <h1 className=' pl-4   text-[40px] font-extrabold font-primary italic '>Zippy</h1></div>
      <ol className="list-none justify-end items-center flex-1 md:flex   text-[20px]   pr-20 hidden ">
        <li className='pr-5'> <Link href='/Aboutus'>Menu</Link></li>
        <li className='pr-5'><Link href='/ContactUs'>ContactUs</Link></li>
        <li ><Link href='/Aboutus'>About</Link></li>

      </ol>
      <button className="  bg-[#EB002B] rounded-[25px] h-[35px] w-[70px] text-[#FFF] font-sans " >Login</button>
      <img className=" w-[63px] h-[57px] mt-[-8px] md:ml-2 mr-1 " src="images/cartIcon.png"  />
    </nav>
    </div>
  );
};

export default Navbar;
