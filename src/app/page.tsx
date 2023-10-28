import Image from 'next/image'
import Navbar from './components/navbar'
import Hero from './components/hero'
import Aboutus from './components/Aboutus'
import Burger from './components/3Dburger'
import ContactUs from './components/ContactUs/Contactus'

export default function Home() {
  return (
    <div className='bg-[#FFD700] min-h-screen'>
      <Navbar/>
      {/* <Hero/> */}
      {/* <Burger /> */}
     <Aboutus/>
      {/* <Aboutus /> */}
     
    </div>
  )
}
