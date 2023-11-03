
import Aboutus from "./components/Aboutus";
import ProductItemCard from "./components/Cards/ProductItemCard";
import Hero from "./components/hero";
import LoginPage from "./components/login";

export default function Home() {
  return (
    <div className='bg-[#FFD700] min-h-screen '>
      
      {/* <Hero/> */}
      {/* <Burger /> */}
     {/* <Hero/> */}
   {/* <ShoppingCart /> */}
      {/* <Aboutus /> */}
     {/* <OrderCheckOut1 /> */}

     <Navbar/>
     
    <Hero/>
     {/* <MenuPage /> */}
     <ProductItemCard imgUrl='/images/beverages.png' name='Name' price='100' desc='DESCRIPTION'/>

     
    </div>
  )
}
