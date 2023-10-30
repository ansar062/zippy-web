import Image from 'next/image'
import Navbar from './components/navbar'
import Hero from './components/hero'
import Aboutus from './components/Aboutus'
import Burger from './components/3Dburger'
import ContactUs from './components/ContactUs/Contactus'
import SignUpPage from './components/signup'
import LoginPage from './components/login'
import ShoppingCart from './components/ShoppingCart/ShoppingCart'

export default function Home() {
  return (
    <div className='bg-[#FFD700] min-h-screen '>
      {/* <Navbar/> */}
      {/* <Hero/> */}
      {/* <Burger /> */}
     {/* <Hero/> */}
   <ShoppingCart />
      {/* <Aboutus /> */}
     
    </div>
  )
}
