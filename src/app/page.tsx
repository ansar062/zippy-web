import Aboutus from "./components/Aboutus";
import ProductItemCard from "./components/Cards/ProductItemCard";


import MenuPage from "./components/menuPage";

import LoginPage from "./components/login";
import Navbar from "./components/navbar";

export default function Home() {
  return (
    <div className='bg-[#FFD700] min-h-screen '>

      {/* <Navbar/> */}

      {/* <Hero/> */}
      {/* <Burger /> */}

      {/* <ShoppingCart /> */}
      {/* <Aboutus /> */}
     {/* <OrderCheckOut1 /> */}

     <Navbar/>
     
   
     {/* <MenuPage /> */}
     <ProductItemCard imgUrl='/images/beverages.png' name='Name' price='100' desc='DESCRIPTION'/>

     
    </div>
  )
}
