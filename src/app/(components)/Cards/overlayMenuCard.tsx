import React, { useState } from "react";
import Portal from "./portal";
import ProductItemCard from "./ProductItemCard";
import Sampledata from "../data";


const MenuOverlayWindow = (props:any) => {
  const [isOpen, setIsOpen] = useState(false);
  const [mealState,setMealState]=useState<String>(props.type);

  const [overlayPosition, setOverlayPosition] = useState({
    top: 0,
    left: 0,
    width: 0,
    height: 0,
  });
  
  const mealArray=[
    'Everyday Value',
    'Spicy Chicken',
    'Beef Burger',
    'family festive',
    'Beverages'
  ]
  const bestseller = Sampledata["bestseller"];
  const handleClose = () => {
    props.onClose();
    
  };
  const onbuttonclick={
    
  }

  return (
   
    <div className="  top-0 ml-[1rem] mt-[2rem] bg-fixed  absolute bg-black/30 w-[97%] rounded-lg backdrop-blur-xl h-[95%]">
       <button className=" w-[2rem] bg-[#EB002B] mt-[1rem] ml-[1rem] rounded-2xl text-bold text-white" onClick={handleClose}>
       x
      </button>
       <div className="mt-[1rem]">
        { mealArray.map((item, index) => { return <button onClick={()=>setMealState(item)} className={` ${mealState == item ?  'bg-white text-black':"bg-[#EB002B] text-[#FFF]"} rounded-[25px] p-2  font-primary ml-[1rem] md:ml-[1rem] ` } >{item}</button>} )}
       
       </div>
      <section className='flex-row mt-[2rem] ml-3 '>
<h1 className=' text-[#EB002B]  font-bold italic text-[200%] pr-2 font-porter' >{mealState} </h1>
<div className='flex  ml-2 pt-[1rem] float-left h-[44vh] max-h-[90vh]  flex-wrap w-full' style={{ scrollbarWidth: 'none',}}>{

bestseller.map((item, index) =>
   <ProductItemCard key={index} imgUrl={item.imageSrc} name={item.title} desc={item.desc} price={item.price}/>)}</div>
</section>
    </div>
    
  );
};

export default MenuOverlayWindow;
