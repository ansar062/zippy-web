import Sampledata from "../data";

import MenuBox from "../Cards/menubox";
import Navbar from "../navbar";

const MenuPage = () => {
  var menu = Sampledata["menu"];
  var bestseller = Sampledata["bestseller"];
  var topdeals = Sampledata["topdeals"];
  return (
    <div className=' mt-[8rem] ml-3 ' >
     <section className="flex-row  ">
      <h1 className='float-left text-[#EB002B]  font-bold font-porter italic text-[180%] pr-2 ' >Menu  </h1>

      <div className='flex flex-nowrap pt-10 float-left h-[44vh] max-h-[90vh] overflow-x-auto w-full' style={{ scrollbarWidth: 'none',}}>{

       menu.map((item, index) =>
          <MenuBox key={index} title={item.title} imageSrc={item.imageSrc} />)}</div>
          </section>
       
<section className='flex-row mt-[2rem] ml-3 '>
<h1 className=' text-[#EB002B]  font-bold italic text-[200%] pr-2 font-porter' >Best Sellers </h1>
<div className='flex flex-nowrap pt-10 float-left h-[44vh] max-h-[90vh] overflow-x-auto w-full' style={{ scrollbarWidth: 'none',}}>{

menu.map((item, index) =>
   <MenuBox key={index} title={item.title} imageSrc={item.imageSrc} />)}</div>

</section>
<section className='flex-row mt-[2rem]   ml-3'>
<h1 className=' text-[#EB002B] font-bold italic text-[200%] pr-2 font-porter' >Best Sellers </h1>
<div className='flex flex-nowrap pt-10 float-left h-[44vh] max-h-[90vh] overflow-x-auto w-full' style={{ scrollbarWidth: 'none',}}>{

menu.map((item, index) =>
   <MenuBox key={index} title={item.title} imageSrc={item.imageSrc} />)}</div>

</section>
   
    </div>
  );
};

export default MenuPage;
