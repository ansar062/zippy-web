import Image from 'next/image'
import Navbar from './components/navbar'
import Hero from './components/hero'
import Aboutus from './components/Aboutus'
import Burger from './components/3Dburger'
import ContactUs from './components/ContactUs/Contactus'
import SignUpPage from './components/signup'
import LoginPage from './components/login'
import ShoppingCart from './components/ShoppingCart/ShoppingCart'
import OrderCheckOut1 from './components/OrderCheckout/OrderCheckout1'
import ProductItemCard from './components/Cards/ProductItemCard'
import ProductsScreen from './components/ProductsScreen/ProductsScreen'

export default function Home() {
  return (
    <div className='bg-[#FFD700] min-h-screen '>
      {/* <Navbar/> */}
      {/* <Hero/> */}
      {/* <Burger /> */}
     {/* <Hero/> */}
   {/* <ShoppingCart /> */}
      {/* <Aboutus /> */}
     {/* <OrderCheckOut1 /> */}
     <ProductsScreen />
     
    </div>
  )
}
