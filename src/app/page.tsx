import Aboutus from "./components/Aboutus";
import ProductItemCard from "./components/Cards/ProductItemCard";
import Hero from "./components/hero";
import LoginPage from "./components/login";
import MenuPage from "./components/menuPage";
import Navbar from "./components/navbar";
import SignupPage from "./components/signup";
import ProductsScreen from "./components/ProductsScreen/ProductsScreen";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";
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
     
    </div>
  )
}
