
import Sampledata from './data'

import MenuBox from './Cards/menubox';
import Navbar from './navbar'

const MenuPage = () => {
  var menu = Sampledata['menu'];
  var bestseller = Sampledata['bestseller'];
  var topdeals = Sampledata['topdeals'];
  return (
    <div className='flex-row mt-[5%]' >
   
      <h1 className='float-left text-[#EB002B] font-sans font-bold italic text-[180%] pr-2  ' >Menu  </h1>

      <div className='flex flex-nowrap pt-10 float-left h-[44vh] max-h-[90vh] overflow-x-auto w-full' style={{ scrollbarWidth: 'none',}}>{

       menu.map((item, index) =>
          <MenuBox key={index} title={item.title} imageSrc={item.imageSrc} />)}</div>
          
       
<section className='float-left'>
<h1 className=' text-[#EB002B] font-sans font-bold italic text-[200%] pr-2 ' >Best Sellers </h1>
<div className='flex flex-nowrap pt-10 float-left h-[44vh] max-h-[90vh] overflow-x-auto w-full' style={{ scrollbarWidth: 'none',}}>{

menu.map((item, index) =>
   <MenuBox key={index} title={item.title} imageSrc={item.imageSrc} />)}</div>

</section>
<section className='float-left'>
<h1 className=' text-[#EB002B] font-sans font-bold italic text-[200%] pr-2 ' >Best Sellers </h1>
<div className='flex flex-nowrap pt-10 float-left h-[44vh] max-h-[90vh] overflow-x-auto w-full' style={{ scrollbarWidth: 'none',}}>{

menu.map((item, index) =>
   <MenuBox key={index} title={item.title} imageSrc={item.imageSrc} />)}</div>

</section>
   
    </div>
  )
}

export default MenuPage