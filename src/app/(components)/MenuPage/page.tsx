'use client';
import Sampledata from "../data";

import MenuBox from "../Cards/menubox";
import Navbar from "../navbar";
import ProductItemCard from "../Cards/ProductItemCard";
import MenuTypeCard from "../Cards/menutypecard";
import {useState}from "react";
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import OverlayMenu from "../Cards/overlayMenuCard";
import MenuOverlayWindow from "../Cards/overlayMenuCard";
import ReactDOM from "react-dom";
import { createPortal } from "react-dom";
const MenuPage = () => {
  var menu = Sampledata["menu"];
  var bestseller = Sampledata["bestseller"];
  var topdeals = Sampledata["topdeals"];
  var [keyMenu,setkey] = useState<String>('');
 
  const [isMenuOverlayOpen, setIsMenuOverlayOpen] = useState(false);
  var rootNode = document.getElementById('root');

  const handleOpenMenuOverlay = () => {
   
    
   setIsMenuOverlayOpen(true);
   
  };
  const setID =(id:String)=>{
    setkey(id);
   console.log(id);
  }

  const handleCloseMenuOverlay = () => {
    setIsMenuOverlayOpen(false);
  };

  
  console.log(open)
  return (
    <div id="menupage" className=' mt-[7rem] ml-4  min-h-screen min-w-screen    to-red-500 rounded-xl' >
      
     <section className="flex-row  ">
      <h1 className='float-left text-[#EB002B] backdrop-blur-lg  font-bold font-porter italic text-[180%] pr-2   ' >Menu  </h1>

      <div className='flex bg-flex-nowrap ml-2 pt-[1rem] float-left h-[44vh] max-h-[90vh] overflow-x-auto w-full' style={{ scrollbarWidth: 'none',}}>{

       menu.map((item, index) =>
          <MenuTypeCard function={handleOpenMenuOverlay} idfuntion={setID} key={index} imgUrl={item.imageSrc} name={item.title} desc={item.title} price={item.catagory}/>)}</div>
          </section>
       
<section className='flex-row mt-[2rem] ml-3 '>
<h1 className=' text-[#EB002B]  font-bold italic text-[200%] pr-2 font-porter' >Best Sellers </h1>
<div className='flex bg-flex-nowrap ml-2 pt-[1rem] float-left h-[44vh] max-h-[90vh] overflow-x-auto w-full' style={{ scrollbarWidth: 'none',}}>{

bestseller.map((item, index) =>
   <ProductItemCard key={index} imgUrl={item.imageSrc} name={item.title} desc={item.desc} price={item.price}/>)}</div>
</section>
<section className='flex-row mt-[2rem]   ml-3'>
<h1 className=' text-[#EB002B] font-bold italic text-[200%] pr-2 font-porter' >Top deals </h1>
<div className='flex flex-nowrap pt-10 float-left h-[44vh] max-h-[90vh] overflow-x-auto w-full' style={{ scrollbarWidth: 'none',}}>{
topdeals.map((item, index) =>

<MenuTypeCard function={handleOpenMenuOverlay} key={index} idfuntion={setID} imgUrl={item.imageSrc[0]} name={item.title} desc={item.title} price={item.catagory}/>)}</div>

</section>

{isMenuOverlayOpen==true && (
        (createPortal)(
         <MenuOverlayWindow type={keyMenu}   onClose={handleCloseMenuOverlay}/>,
          rootNode!
        )
      )}

    </div>
  );
};

export default MenuPage;
